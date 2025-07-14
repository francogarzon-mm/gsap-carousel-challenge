import Slider from "../DraggableSlider/Slider/Slider";
import { data, dataWithoutImg } from "../../data/data";

const DemoSlider = () => {
  return (
    <>
      <div style={{ padding: "50px 0" }}>
        <Slider items={data} />
      </div>
      <hr />
      <div style={{ padding: "50px 0" }}>
        <Slider items={data.slice(0, 3)} />
      </div>
      <hr />
      <div style={{ padding: "50px 0" }}>
        <Slider items={dataWithoutImg.slice(0, 3)} />
      </div>
      <hr />
      <div style={{ padding: "50px 0" }}>
        <Slider items={dataWithoutImg} />
      </div>
    </>
  );
};
export default DemoSlider;
