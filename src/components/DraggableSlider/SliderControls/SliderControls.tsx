import "./SliderControls.css";

type SliderControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  index: number;
  maxIndex: number;
};

const SliderControls = ({
  onPrev,
  onNext,
  index,
  maxIndex,
}: SliderControlsProps) => {
  return (
    <div
      className="slider-controls"
      role="group"
      aria-label="Carousel Controls"
    >
      <span
        className="slide-controls-index"
        aria-live="polite"
        aria-atomic="true"
      >
        {`${index + 1} / ${maxIndex + 1} `}
      </span>
      <button
        onClick={onPrev}
        disabled={index === 0}
        aria-label="previous slide"
      >
        {"<"}
      </button>
      <button
        onClick={onNext}
        disabled={index >= maxIndex}
        aria-label="next slide"
      >
        {">"}
      </button>
    </div>
  );
};

export default SliderControls;
