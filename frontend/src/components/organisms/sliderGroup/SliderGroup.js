import React from "react";
import slide1 from "../../../assets/slider/slide1.jpg";
import slide2 from "../../../assets/slider/slide2.jpg";
import slide3 from "../../../assets/slider/slide3.png";
import banner1 from "../../../assets/slider/banner1.jpg";
import banner2 from "../../../assets/slider/banner2.jpg";
import { Carousel } from "react-carousel-minimal";

// data phải có chứa trường image
const dataSlide = [
  { id: 1, image: slide1 },
  { id: 2, image: slide2 },
  { id: 3, image: slide3 },
];

const SliderGroup = () => {
  return (
    <section className="mb-20 slider-group">
      <div className="grid grid-cols-4 gap-x-[10px] h-[400px]">
        <Carousel
          data={dataSlide}
          time={2000}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
        />
        <div className="flex flex-col max-h-[392px]">
          <img src={banner1} alt="" className="mb-2 max-h-[50%]" />
          <img src={banner2} alt="" className="h-1/2 max-h-[50%]" />
        </div>
      </div>
    </section>
  );
};

export default SliderGroup;
