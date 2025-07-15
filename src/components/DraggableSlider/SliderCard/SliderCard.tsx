import type { Item } from "../Slider/Slider";
import "./SliderCard.css";

type SliderCardProps = {
  item: Item;
  width?: number;
  gap: number;
};

const SliderCard = ({ item, width, gap }: SliderCardProps) => {
  return (
    <a
      href={item.cta.link}
      className="slider-card"
      aria-label={`Ir a ${item.content.text}`}
      style={{
        flex: `0 0 ${width}px`,
        marginRight: `${gap}px`,
      }}
    >
      <div className="slider-card-content">
        {item.url && item.alt && (
          <div className="slider-card-image">
            <img src={item.url} alt={item.alt} />
          </div>
        )}

        <div className="slider-card-categories">
          {item.categories.map((category, index) => (
            <span
              key={index}
              aria-label={`Category: ${category.text}`}
              className={`slider-card-category ${
                category.highlight ? "highlight" : ""
              }`}
            >
              {category.text}
            </span>
          ))}
        </div>

        <div className="slider-card-description">
          <h3>{item.content.text}</h3>
          <hr className="slider-card-divider" />
          <div className="slider-card-cta">
            <p>{item.cta.text}</p>
            <span className="slider-card-cta-icon">
              <img
                src="icons/arrow-right-icon.svg"
                alt=""
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SliderCard;
