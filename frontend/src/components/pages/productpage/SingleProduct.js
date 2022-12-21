import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import handleFormatNumber from "../../../handlers/handleFormatNumber";
import Button from "../../atoms/Button";
import InputCombo from "../../molecules/InputCombo";
// import $ from "jquery";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "./SingleProduct.scss";
import { useCart } from "../../../context/cartContext";
import Toast from "../../molecules/Toast";
import axios from "axios";
import LoadingSkeleton from "../../../loading/LoadingSkeleton";

const SingleProduct = () => {
  const navigate = useNavigate();
  const data = useLocation();
  const productId = data.state?.id;
  const [dataProd, setDataProd] = useState({ product: null, images: null });
  const productPrice = handleFormatNumber(Number(dataProd.product?.price) || 0);
  // ------------------------------------------------------------------
  // chương trình giảm giá ---> cần fix để đồng bộ với sản phẩm trong giỏ hàng
  const discount = 1.2;
  const productPriceOld = handleFormatNumber(
    Number(dataProd?.product?.price) * discount
  );
  // main image
  const [productImage, setProductImage] = useState(dataProd?.product?.image);

  const handleChangeImage = (e) => {
    setProductImage(e.target.src);
  };

  const cartContext = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showToastMess, setShowToastMess] = useState(false);

  // thêm vào giỏ hàng
  const handleAddToCart = () => {
    const data = {
      id: dataProd.product.id,
      title: dataProd.product.name,
      image: dataProd.product.image,
      price: dataProd.product.price,
      stock: dataProd.product.quantity,
      quantity,
    };
    // console.log(quantity);
    cartContext.addProductToCart(data, Number(quantity));
    setShowToastMess(true);
    setTimeout(() => {
      setShowToastMess(false);
    }, 5000);
  };

  useEffect(() => {
    const fetchData = async () => {
      const respProd = await axios(
        `http://localhost:8000/api/product/${productId}`
      );
      const respImgs = await axios(
        `http://localhost:8000/api/images/${productId}`
      );
      setDataProd({ product: respProd.data, images: respImgs.data });
      setProductImage(respProd.data.image);
    };

    fetchData();
  }, []);

  return (
    <div className="container w-full my-10">
      {!dataProd.product && <SingleProductSkeleton></SingleProductSkeleton>}
      {dataProd.product && (
        <>
          <Toast
            show={showToastMess}
            title={dataProd.product.name}
            imgUrl={dataProd.product.image}
            handleClose={() => setShowToastMess(false)}
          ></Toast>
          <section className="flex items-center justify-start h-10 px-10 mb-5 font-bold bg-blue-100 gap-x-2 breadcumb">
            <Link to="/product" className="hover:text-secondary">
              Tất cả sản phẩm
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <p
              className="cursor-pointer hover:text-secondary"
              onClick={() => navigate(-1)}
            >
              Trở về
            </p>
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
                    {dataProd.images.length > 0 &&
                      dataProd.images.map((item, index) => (
                        <SplideSlide key={index}>
                          <img
                            src={item?.url}
                            alt=""
                            data-id={index}
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
              <h1 className="mb-3 text-3xl font-bold">
                {dataProd.product?.name}
              </h1>
              <p className="pr-6 mb-4 bg-opacity-50 text-end bg-primary">
                <b>10k</b> đã bán
              </p>
              {/* price */}
              <div className="flex items-center mb-6 price gap-x-4">
                <span className="line-through old">{productPriceOld} đ</span>
                <span className="text-3xl font-bold current text-hot">
                  {productPrice} đ
                </span>
              </div>
              {/* detail */}
              <div className="flex w-full mb-6 quantity gap-x-4 spaces-between">
                <span className="py-1">Số lượng</span>
                <InputCombo
                  className="max-w-[300px]"
                  max={dataProd.product?.quantity}
                  handleQuantity={(val) => setQuantity(val)}
                  type="ADD"
                ></InputCombo>
                <span className="py-1">
                  {dataProd.product?.quantity} khả dụng
                </span>
              </div>
              {/*  */}
              <div className="flex items-center mb-10 gap-x-4">
                <span>Loại sản phẩm</span>
                <div className="flex variants gap-x-2">
                  <span className="px-3 py-1 rounded-2xl bg-primary">
                    {dataProd.product.nameType}
                  </span>
                </div>
              </div>
              {/* button group */}
              <div className="flex mb-6 button-group gap-x-4">
                <Button
                  className="w-auto px-4 font-bold bg-white border border-secondary text-secondary hover:bg-secondary hover:text-white"
                  onClick={handleAddToCart}
                >
                  Thêm vào giỏ hàng
                </Button>
                <Button
                  onClick={() => navigate("/cart/checkout")}
                  className="w-auto px-4 font-bold border hover:bg-hover border-primary"
                >
                  Mua ngay
                </Button>
              </div>
              {/* desc */}
              <div className="w-full h-1 bg-[#b7b7b7]"></div>
              <div className="grid w-full grid-cols-3">
                <div className="flex"></div>
              </div>
            </div>
          </section>
          {/*========= section 2 ==========*/}
          <section className="p-10 border detail border-border">
            <div className="flex flex-col mb-5 gap-y-2">
              <div className="p-3 bg-primary bg-opacity-10">
                <h3 className="text-3xl font-bold">Mô tả sản phẩm</h3>
              </div>
              <div className="p-3">
                <p>
                  Chúng tôi là người bán hàng Trung Quốc, chào mừng bạn đến với
                  Dropship / Đại lý / Bán buôn / Khách hàng để mua hàng 100%
                  hàng mới, chất lượng cao Hàng đã sẵn sàng và được giao trong
                  vòng 1-2 ngày, thời gian đến nơi ước tính là 7-15 ngày Theo
                  dõi chúng tôi để được hưởng ưu tiên giao hàng và nhận chiết
                  khấu mới nhất
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 image">
              {dataProd.images.length > 0 &&
                dataProd.images.map((item, index) => (
                  <img src={item?.url} alt="" key={index} className=""></img>
                ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

const SingleProductSkeleton = () => {
  return (
    <>
      <section className="flex flex-col items-start justify-center h-10 px-10 mb-5 font-bold bg-blue-100 breadcumb">
        <span>Home &gt; Túi sách</span>
      </section>
      <section className="grid grid-cols-2 gap-5 mb-10">
        {/*>>>>> left product image */}
        <div className="flex flex-col">
          <LoadingSkeleton
            width="100%"
            height="300px"
            radius="10px"
          ></LoadingSkeleton>
          {/* fix scroll y */}
          <div className="mt-5 variants gap-x-2 max-w-[500px] preview-image-slide">
            <LoadingSkeleton
              width="100%"
              height="30px"
              radius="10px"
            ></LoadingSkeleton>
          </div>
        </div>
        {/*>>>>> right detail */}
        <div className="flex flex-col">
          <h1 className="mb-3 text-3xl font-bold">
            <LoadingSkeleton
              width="100%"
              height="30px"
              radius="10px"
            ></LoadingSkeleton>
          </h1>
          <LoadingSkeleton
            width="100%"
            height="30px"
            radius="10px"
          ></LoadingSkeleton>
          {/* price */}
          <div className="flex items-center mb-6 price gap-x-4">
            <span className="line-through old">
              <LoadingSkeleton
                width="10%"
                height="30px"
                radius="10px"
              ></LoadingSkeleton>
            </span>
            <span className="text-3xl font-bold current text-hot">
              <LoadingSkeleton
                width="10%"
                height="30px"
                radius="10px"
              ></LoadingSkeleton>
            </span>
          </div>
          {/* detail */}
          <div className="flex w-full mb-6 quantity gap-x-4 spaces-between">
            <span className="py-1">
              <LoadingSkeleton
                width="10%"
                height="30px"
                radius="10px"
              ></LoadingSkeleton>
            </span>
            <LoadingSkeleton
              width="40%"
              height="30px"
              radius="10px"
            ></LoadingSkeleton>
            <span className="py-1">
              <LoadingSkeleton
                width="10%"
                height="30px"
                radius="10px"
              ></LoadingSkeleton>
            </span>
          </div>
          {/*  */}
          <div className="flex items-center mb-10 gap-x-4">
            <span>
              <LoadingSkeleton
                width="10%"
                height="30px"
                radius="10px"
              ></LoadingSkeleton>
            </span>
            <div className="flex variants gap-x-2">
              <LoadingSkeleton
                width="20px"
                height="20px"
                radius="100%"
              ></LoadingSkeleton>
            </div>
          </div>
          {/* button group */}
          <div className="flex button-group gap-x-4">
            <LoadingSkeleton
              width="100%"
              height="50px"
              radius="10px"
            ></LoadingSkeleton>
            <LoadingSkeleton
              width="100%"
              height="50px"
              radius="10px"
            ></LoadingSkeleton>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
