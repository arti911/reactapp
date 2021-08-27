import Slider from "../../Swiper";
import Image from "./Image";

import { cars } from "./constants";
import { settings } from "./settings";

const SliderImage = () => {
  return (
    <Slider settings={settings}>
      {cars.map((item) => (
        <Image item={item} key={item} />
      ))}
    </Slider>
  );
};

export default SliderImage;
