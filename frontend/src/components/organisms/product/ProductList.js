import React from "react";
import ProductItem from "../../molecules/productItem/ProductItem";

const ProductList = () => {
  return (
    <div className="product-list grid grid-cols-4 gap-5 mb-20">
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
    </div>
  );
};

export default ProductList;
