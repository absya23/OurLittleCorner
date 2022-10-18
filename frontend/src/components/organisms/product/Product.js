import React from "react";
import { useNavigate } from "react-router-dom";
import { productData } from "../../../data/FakeData";
import ProductTitle from "../../atoms/ProductTitle";
import ProductItem from "../../molecules/productItem/ProductItem";

const Product = ({ children, title, length }) => {
  const navigate = useNavigate();
  const productGroupData = productData;
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
              productGroupData.length > 0 &&
              productGroupData
                .slice(0, length)
                .map((item, index) => (
                  <ProductItem
                    key={index}
                    title={item?.title}
                    price={item?.price}
                    image={item?.image}
                  ></ProductItem>
                ))}
            {!length &&
              productGroupData
                .slice(0, 8)
                .map((item, index) => (
                  <ProductItem
                    key={index}
                    title={item?.title}
                    price={item?.price}
                    image={item?.image}
                  ></ProductItem>
                ))}
          </div>
        </div>
        <div className="flex items-center justify-center btn-group">
          <button
            className="px-3 py-2 text-white uppercase rounded-lg hover:bg-secondary bg-primary"
            onClick={() => navigate("/product")}
          >
            Xem thêm
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
