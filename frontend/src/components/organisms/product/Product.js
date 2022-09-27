import React from "react";
import ProductTitle from "../../atoms/ProductTitle";
import ProductItem from "../../molecules/productItem/ProductItem";

const Product = ({ children, title, length }) => {
  return (
    <section className="mb-20 product">
      <div className="container">
        <div className="mb-5 title">
          <ProductTitle>{title}</ProductTitle>
          {children}
        </div>
        <div className="mb-10 product-list">
          <div className="grid grid-cols-4 gap-8 product-list-container">
            {length > 0 &&
              new Array(length)
                .fill(0)
                .map((item, index) => <ProductItem key={index}></ProductItem>)}
            {!length && (
              <>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center btn-group">
          <button className="px-3 py-2 text-white uppercase rounded-lg hover:bg-secondary bg-primary">
            Xem thêm
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
