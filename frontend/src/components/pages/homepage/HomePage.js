import React from "react";
import "./HomePage.scss";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import SliderGroup from "../../organisms/sliderGroup/SliderGroup";

const HomePage = () => {
  return (
    <div className="homepage">
      <SliderGroup></SliderGroup>
    </div>
  );
};

export default HomePage;
