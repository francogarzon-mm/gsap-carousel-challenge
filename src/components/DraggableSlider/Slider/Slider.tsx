import "./Slider.css";
import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import SliderControls from "../SliderControls/SliderControls";
import SliderTrack from "../SliderTrack/SliderTrack";

gsap.registerPlugin(Draggable);

export type Item = {
  id: number;
  url?: string;
  alt: string;
  content: {
    text: string;
  };
  categories: { text: string; highlight: boolean }[];
  cta: {
    text: string;
    link: string;
  };
};

type SliderProps = {
  items: Item[];
  cardsItemsInView?: number;
  cardMarginPx?: number;
};

function calculateVisibleCardsInView(containerWidth: number) {
  if (containerWidth >= 1920) return 4;
  if (containerWidth >= 1440) return 3;
  if (containerWidth >= 1280) return 3;
  if (containerWidth >= 900) return 3;
  if (containerWidth >= 764) return 2;
  return 1;
}

const Slider = ({
  items,
  cardsItemsInView = 3,
  cardMarginPx = 18,
}: SliderProps) => {
  const sliderWrapperRef = useRef<HTMLDivElement>(null);
  const sliderTrackRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<Draggable | null>(null);

  const [visibleCards, setVisibleCards] = useState(cardsItemsInView);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentSliderTrackWitdth, setCurrentSliderTrackWitdth] = useState(0);

  // Actualiza layout y calcula el ancho de la cada card cuando cambia dinamicamente el viewport
  const updateLayout = useCallback(() => {
    if (!sliderWrapperRef.current) return;
    const sliderWrapper = sliderWrapperRef.current.offsetWidth;
    const visiblesCardsInView = calculateVisibleCardsInView(sliderWrapper);

    const totalMargin = (visiblesCardsInView - 1) * cardMarginPx;
    const actualCardWidth = (sliderWrapper - totalMargin) / visiblesCardsInView;

    setVisibleCards(visiblesCardsInView);
    setCardWidth(actualCardWidth);
  }, [cardMarginPx]);

  // Efecto para actualizar el layout al montar el componente y al cambiar el tamaño de la ventana
  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  const maxIndex = Math.max(0, items.length - visibleCards);

  const goToIndex = useCallback(
    (newIndex: number) => {
      const clamped = Math.max(0, Math.min(maxIndex, newIndex));
      setCurrentItemIndex(clamped);
      if (sliderTrackRef.current) {
        gsap.to(sliderTrackRef.current, {
          x: -clamped * (cardWidth + cardMarginPx),
          duration: 0.4,
          ease: "power2.out",
        });
      }
    },
    [maxIndex, cardWidth, cardMarginPx]
  );
  const jumpByGroup = items.length > 10;

  const goNext = useCallback(() => {
    const step = jumpByGroup ? visibleCards : 1;
    const nextIndex = currentItemIndex + step;
    if (nextIndex <= maxIndex) {
      goToIndex(nextIndex);
    } else {
      goToIndex(maxIndex);
    }
  }, [jumpByGroup, visibleCards, currentItemIndex, maxIndex, goToIndex]);

  const goPrev = useCallback(() => {
    const step = jumpByGroup ? visibleCards : 1;
    const prevIndex = currentItemIndex - step;
    if (prevIndex >= 0) {
      goToIndex(prevIndex);
    } else {
      goToIndex(0);
    }
  }, [jumpByGroup, visibleCards, currentItemIndex, goToIndex]);

  // Inicializa o reinicializa Draggable al cambiar layout
  useEffect(() => {
    if (!sliderTrackRef.current) return;

    draggableRef.current?.kill();

    const slideSize = cardWidth + cardMarginPx;
    const maxX = -(items.length - visibleCards) * slideSize;
    setCurrentSliderTrackWitdth(items.length * slideSize);

    draggableRef.current = Draggable.create(sliderTrackRef.current, {
      type: "x",
      bounds: { minX: maxX, maxX: 0 },
      inertia: true,
      maxDuration: 0.4,
      onDragEnd: function () {
        const currentX = this.x;
        const groupSize = jumpByGroup ? visibleCards : 1;
        const newIdx =
          Math.round(-currentX / slideSize / groupSize) * groupSize;
        goToIndex(newIdx);
      },
    })[0];

    gsap.set(sliderTrackRef.current, { x: -currentItemIndex * slideSize });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardWidth, goToIndex, visibleCards]);

  const onKeyboardPress = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        goNext();
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        goPrev();
        e.preventDefault();
      }
    },
    [goNext, goPrev]
  );

  if (items.length < 4) {
    return <div>Cards</div>;
  }
  return (
    <div
      role="region"
      aria-roledescription="Carousel"
      aria-label="Cards Slider Carousel"
      tabIndex={0}
      ref={sliderWrapperRef}
      className="slider-wrapper"
      onKeyDown={onKeyboardPress}
    >
      <SliderControls
        onPrev={goPrev}
        onNext={goNext}
        index={currentItemIndex}
        maxIndex={maxIndex}
      />
      <SliderTrack
        ref={sliderTrackRef}
        items={items}
        cardWidth={cardWidth}
        cardMarginPx={cardMarginPx}
        maxX={currentSliderTrackWitdth}
      />
    </div>
  );
};

export default Slider;
