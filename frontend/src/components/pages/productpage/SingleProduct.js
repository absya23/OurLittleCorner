import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { productData } from "../../../data/FakeData";
import handleFormatNumber from "../../../handlers/handleFormatNumber";
import handleGetProductById from "../../../handlers/handleGetProduct";
import Button from "../../atoms/Button";
import InputCombo from "../../molecules/InputCombo";

const SingleProduct = () => {
  const navigate = useNavigate();
  const data = useLocation();
  const productId = data.state?.id;
  const product = handleGetProductById(productData, productId);
  const productPrice = handleFormatNumber(Number(product?.price) || 0);
  const discount = 0.8;
  const productPriceCurrent = handleFormatNumber(
    Number(product?.price) * discount
  );
  const listImages = product?.imagelist || [];
  const variants = product?.variants || [];
  const numberOfVariants = variants.length === 0 ? 1 : variants.length;
  const [itemActive, setItemActive] = useState(1);

  const handleChooseItem = (index) => {
    setItemActive(index);
  };

  return (
    <div className="my-10 w-full container">
      <section className="breadcumb h-10 bg-blue-100 mb-5 flex flex-col justify-center items-start px-10 font-bold">
        <span>Home &gt; Túi sách</span>
      </section>
      <section className="content grid grid-cols-2 gap-5">
        {/* left */}
        <div className="flex flex-col">
          <img src={product?.image} alt="" className="max-w-[500px]" />
          <div className="variants mt-5 flex gap-x-2 items-center">
            {variants.length > 0 &&
              variants.map((item, index) => (
                <img
                  src={item?.image}
                  alt=""
                  className="w-[100px] h-[100px] border hover:shadow hover:border-secondary"
                />
              ))}
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-3">{product?.title}</h1>
          <p className="mb-4 text-end pr-6">
            <b>10k</b> sold
          </p>
          {/* price */}
          <div className="price flex gap-x-4 items-center mb-6">
            <span className="old line-through">{productPrice} đ</span>
            <span className="current text-3xl font-bold text-hot">
              {productPriceCurrent} đ
            </span>
          </div>
          {/* detail */}
          <div className="quantity w-full flex gap-x-4 spaces-between mb-6">
            <span className="py-1">Số lượng</span>
            <InputCombo className="max-w-[300px]"></InputCombo>
            <span className="py-1">200 khả dụng</span>
          </div>
          {/*  */}
          <div className="flex gap-x-4 mb-10 items-center">
            <span>Phân loại</span>
            <div className="variants flex gap-x-2">
              {variants.length > 0 &&
                variants.map((item, index) => (
                  <div
                    className={`w-10 h-10 rounded-full border-2  cursor-pointer hover:shadow-inner ${
                      itemActive === index + 1
                        ? "border-4 border-primary"
                        : "border-border"
                    }`}
                    style={{ backgroundColor: item?.color }}
                    onClick={() => handleChooseItem(index + 1)}
                  ></div>
                ))}
            </div>
          </div>
          {/* button group */}
          <div className="button-group flex gap-x-4">
            <Button className="bg-white border border-secondary text-secondary font-bold hover:bg-secondary hover:text-white w-auto px-4">
              Thêm vào giỏ hàng
            </Button>
            <Button
              onClick={() => navigate("/cart/checkout")}
              className="font-bold hover:bg-hover border border-primary w-auto px-4"
            >
              Mua ngay
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
