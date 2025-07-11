import "./SliderTrack.css";
import { forwardRef } from "react";
import type { Item } from "../Slider/Slider";
import SliderCard from "../SliderCard/SliderCard";

type SliderDraggableTrackProps = {
  cardWidth: number;
  cardMarginPx: number;
  items: Item[];
  maxX?: number; // Optional prop to set max X position for Draggable
};

const SliderTrack = forwardRef<HTMLDivElement, SliderDraggableTrackProps>(
  ({ items, cardWidth, maxX, cardMarginPx }, ref) => {
    return (
      <div ref={ref} style={{ width: `${maxX}px` }} className="slider-track">
        {items.map((item, i) => {
          const gap = i !== items.length - 1 ? cardMarginPx : 0;
          return (
            <SliderCard key={item.id} item={item} width={cardWidth} gap={gap} />
          );
        })}
      </div>
    );
  }
);

export default SliderTrack;
