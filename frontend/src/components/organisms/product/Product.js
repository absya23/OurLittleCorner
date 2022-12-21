import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleFetchProduct } from "../../../redux/handlers";
import ProductTitle from "../../atoms/ProductTitle";
import ProductItem from "../../molecules/productItem/ProductItem";

const Product = ({ children, title, length }) => {
  const navigate = useNavigate();
  const { data: dataProd, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchProduct());
  }, [dispatch]);
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
              dataProd.length > 0 &&
              dataProd
                .slice(0, length)
                .map((item, index) => (
                  <ProductItem
                    key={index}
                    id={item?.id}
                    title={item?.name}
                    price={item?.price}
                    image={item?.image}
                  ></ProductItem>
                ))}
            {!length &&
              dataProd
                .slice(0, 8)
                .map((item, index) => (
                  <ProductItem
                    key={index}
                    id={item?.id}
                    title={item?.name}
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
