import { forwardRef } from "react";
import type { Item } from "../Slider/Slider";
import SliderCard from "../SliderCard/SliderCard";
import "./SliderStaticFallback.css";

type SliderStaticFallbackProps = {
  items: Item[];
  cardWidth: number;
  cardMarginPx: number;
};

const SliderStaticFallback = forwardRef<
  HTMLDivElement,
  SliderStaticFallbackProps
>(({ items, cardWidth, cardMarginPx }, ref) => {
  return (
    <div className="slider-fallback-wrapper" ref={ref}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            width: `${cardWidth}px`,
            flexShrink: 0,
          }}
        >
          <SliderCard item={item} width={cardWidth} gap={cardMarginPx} />
        </div>
      ))}
    </div>
  );
});
export default SliderStaticFallback;
