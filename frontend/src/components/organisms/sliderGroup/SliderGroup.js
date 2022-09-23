import React from "react";
import Slider from "react-slick";
import slide1 from "../../../assets/slider/slide1.jpg";
import slide2 from "../../../assets/slider/slide2.jpg";
import slide3 from "../../../assets/slider/slide3.png";
import banner1 from "../../../assets/slider/banner1.jpg";
import banner2 from "../../../assets/slider/banner2.jpg";

const SliderGroup = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="slider-group">
      <div className="grid grid-cols-4 gap-x-[10px]">
        <Slider {...settings} className="slider col-span-3 max-h-[360px]">
          <img src={slide1} alt="" className="w-full h-full" />
          <img src={slide2} alt="" className="w-full h-full" />
          <img src={slide3} alt="" className="w-full h-full" />
        </Slider>
        {/* <div className="slider col-span-3 max-h-[360px]"></div> */}
        <div className="flex flex-col max-h-[350px]">
          <img src={banner1} alt="" className="mb-2 max-h-[50%]" />
          <img src={banner2} alt="" className="h-1/2 max-h-[50%]" />
        </div>
      </div>
    </section>
  );
};

export default SliderGroup;
