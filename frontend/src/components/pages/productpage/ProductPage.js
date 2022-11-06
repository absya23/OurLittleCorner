import React from "react";
import { productData } from "../../../data/FakeData";
import PartTitle from "../../atoms/PartTitle";
import Dropdown from "../../molecules/Dropdown";
import PriceRange from "../../organisms/priceRange/PriceRange";
import ProductList from "../../organisms/product/ProductList";
import ProductCategory from "../../organisms/productCategory/ProductCategory";
import "./ProductPage.scss";

const ProductPage = () => {
  const dataProduct = productData;
  return (
    <div className="mb-20 product-page">
      <div className="container flex mt-5 mb-5 gap-x-5">
        <div className="w-1/4 left">
          <ProductCategory></ProductCategory>
          <PriceRange></PriceRange>
        </div>
        <div className="w-3/4 content">
          <div className="flex w-full mb-2 content-head">
            <div className="flex-1">
              <PartTitle title="Sản phẩm"></PartTitle>
              <div className="w-full h-[1px] bg-primary mb-3"></div>
            </div>
            <div className="dropdown-filter h-full w-[150px] ml-5">
              <Dropdown></Dropdown>
            </div>
          </div>
          <ProductList data={dataProduct}></ProductList>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
