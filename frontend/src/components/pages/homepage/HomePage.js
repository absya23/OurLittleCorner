import React, { useEffect } from "react";
import "./HomePage.scss";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import SliderGroup from "../../organisms/sliderGroup/SliderGroup";
import Product from "../../organisms/product/Product";
import Category from "../../molecules/category/Category";
import ProductTitle from "../../atoms/ProductTitle";
import CarouselCenter from "../../molecules/carousel/CarouselCenter";

import axios from "axios";

const HomePage = () => {
  useEffect(() => {
    // test
    axios
      .get("http://localhost:8000/api/admin")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="homepage">
      <SliderGroup></SliderGroup>
      <Product title="Sản phẩm mới"></Product>
      <Product title="Chủ đề mới" length={4}>
        <Category></Category>
      </Product>
      <section className="mb-10 collection">
        <div className="container">
          <div className="mb-5 title">
            <ProductTitle>Bộ sưu tập</ProductTitle>
          </div>
          <CarouselCenter></CarouselCenter>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
