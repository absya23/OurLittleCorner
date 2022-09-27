import React from "react";
import "./HomePage.scss";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import SliderGroup from "../../organisms/sliderGroup/SliderGroup";
import Product from "../../organisms/product/Product";
import Category from "../../molecules/category/Category";
import ProductTitle from "../../atoms/ProductTitle";
import CarouselCenter from "../../molecules/carousel/CarouselCenter";

const HomePage = () => {
  return (
    <div className="homepage">
      <SliderGroup></SliderGroup>
      <Product title="Sản phẩm mới"></Product>
      <Product title="Chủ đề mới" length={4}>
        <Category></Category>
      </Product>
      <section className="collection">
        <div className="container">
          <div className="mb-5 title">
            <ProductTitle>Bộ sưu tập</ProductTitle>
            <CarouselCenter></CarouselCenter>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
