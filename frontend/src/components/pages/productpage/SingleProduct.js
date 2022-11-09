import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { productData } from "../../../data/FakeData";
import handleFormatNumber from "../../../handlers/handleFormatNumber";
import handleGetProductById from "../../../handlers/handleGetProduct";
import Button from "../../atoms/Button";
import InputCombo from "../../molecules/InputCombo";
// import $ from "jquery";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "./SingleProduct.scss";

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
  // main image
  const listImages = product?.imagelist || [];
  const [productImage, setProductImage] = useState(
    product?.image || listImages[0]
  );
  const variants = product?.variants || [];
  const numberOfVariants = variants.length === 0 ? 1 : variants.length;
  // const imageVariants = variants.length === 0 ? [product?.image] : [];
  const [itemActive, setItemActive] = useState(1);

  const handleChooseItem = (index) => {
    setItemActive(index);
    if (variants[index - 1]?.image) setProductImage(variants[index - 1]?.image);
    // setProductImage();
  };

  const handleChangeImage = (e) => {
    setProductImage(e.target.src);
    if (e.target.dataset.id) {
      setItemActive(parseInt(e.target.dataset.id) + 1);
    }
  };

  return (
    <div className="container w-full my-10">
      <section className="flex flex-col items-start justify-center h-10 px-10 mb-5 font-bold bg-blue-100 breadcumb">
        <span>Home &gt; Túi sách</span>
      </section>
      <section className="grid grid-cols-2 gap-5 mb-10">
        {/*>>>>> left product image */}
        <div className="flex flex-col">
          <img src={productImage} alt="" className="max-w-[500px]" />
          {/* fix scroll y */}
          <div className="mt-5 variants gap-x-2 max-w-[500px] preview-image-slide">
            <Splide
              hasTrack={false}
              options={{
                perPage: 5,
                autoScroll: {
                  speed: 2,
                },
                classes: {},
              }}
            >
              <SplideTrack>
                {variants.length > 0 &&
                  variants.map((item, index) => (
                    <SplideSlide key={index}>
                      <img
                        src={item?.image}
                        alt=""
                        data-id={index}
                        className="image-show w-[100px] h-[100px] border hover:shadow hover:border-secondary"
                        onMouseOver={(e) => handleChangeImage(e)}
                      />
                    </SplideSlide>
                  ))}
                {listImages.length > 0 &&
                  listImages.map((item, index) => (
                    <SplideSlide key={index}>
                      <img
                        src={item?.image}
                        alt=""
                        className="image-show w-[100px] h-[100px] border hover:shadow hover:border-secondary"
                        onMouseOver={(e) => handleChangeImage(e)}
                      />
                    </SplideSlide>
                  ))}
              </SplideTrack>
              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </Splide>
          </div>
        </div>
        {/*>>>>> right detail */}
        <div className="flex flex-col">
          <h1 className="mb-3 text-3xl font-bold">{product?.title}</h1>
          <p className="pr-6 mb-4 bg-opacity-50 text-end bg-primary">
            <b>10k</b> đã bán
          </p>
          {/* price */}
          <div className="flex items-center mb-6 price gap-x-4">
            <span className="line-through old">{productPrice} đ</span>
            <span className="text-3xl font-bold current text-hot">
              {productPriceCurrent} đ
            </span>
          </div>
          {/* detail */}
          <div className="flex w-full mb-6 quantity gap-x-4 spaces-between">
            <span className="py-1">Số lượng</span>
            <InputCombo className="max-w-[300px]"></InputCombo>
            <span className="py-1">200 khả dụng</span>
          </div>
          {/*  */}
          <div className="flex items-center mb-10 gap-x-4">
            <span>Phân loại</span>
            <div className="flex variants gap-x-2">
              {variants.length > 0 &&
                variants.map((item, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-full border-2  cursor-pointer hover:shadow-inner ${
                      itemActive === index + 1
                        ? "border-4 border-primary"
                        : "border-border"
                    }`}
                    style={{ backgroundColor: item?.color }}
                    onClick={() => handleChooseItem(index + 1)}
                  ></div>
                ))}
              {variants.length === 0 && (
                <div
                  key={1}
                  className={`w-10 h-10 rounded-full cursor-pointer hover:shadow-inner border-4 border-primary`}
                  style={{ backgroundColor: "#fff" }}
                ></div>
              )}
            </div>
          </div>
          {/* button group */}
          <div className="flex button-group gap-x-4">
            <Button className="w-auto px-4 font-bold bg-white border border-secondary text-secondary hover:bg-secondary hover:text-white">
              Thêm vào giỏ hàng
            </Button>
            <Button
              onClick={() => navigate("/cart/checkout")}
              className="w-auto px-4 font-bold border hover:bg-hover border-primary"
            >
              Mua ngay
            </Button>
          </div>
        </div>
      </section>
      {/*========= section 2 ==========*/}
      <section className="detail border border-border p-10">
        <div className="flex flex-col gap-y-2 mb-5">
          <div className="p-3 bg-primary bg-opacity-10">
            <h3 className="text-3xl font-bold">Mô tả sản phẩm</h3>
          </div>
          <div className="p-3">
            <p>
              Chúng tôi là người bán hàng Trung Quốc, chào mừng bạn đến với
              Dropship / Đại lý / Bán buôn / Khách hàng để mua hàng 100% hàng
              mới, chất lượng cao Hàng đã sẵn sàng và được giao trong vòng 1-2
              ngày, thời gian đến nơi ước tính là 7-15 ngày Theo dõi chúng tôi
              để được hưởng ưu tiên giao hàng và nhận chiết khấu mới nhất
            </p>
          </div>
        </div>
        <div className="image grid grid-cols-2 gap-2">
          {listImages.length > 0 &&
            listImages.map((item, index) => (
              <img src={item?.image} alt="" key={index} className=""></img>
            ))}
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
