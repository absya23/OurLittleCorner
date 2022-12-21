import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productData } from "../../../data/FakeData";
import Button from "../../atoms/Button";
import ProductSlide from "../../organisms/product/ProductSlide";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const productRecently = productData;
  return (
    <section className="my-10 container">
      <section className="mb-10">
        {!user ? (
          <div className="content bg-[#fff3cd] p-10 border border-[#ffeeba] flex flex-col justify-center items-center rounded-md">
            <p className="mb-3">Qúy khách vui lòng đăng nhập để thanh toán!</p>
            <Button
              className="w-[140px] rounded-md bg-secondary hover:bg-white hover:text-secondary border hover:border-secondary"
              onClick={() => navigate("/user/signin")}
            >
              Đăng nhập
            </Button>
          </div>
        ) : (
          <div className="content">hi</div>
        )}
      </section>
      <section className="product-list-seen">
        <h4 className="font-bold text-black uppercase text-xl mb-4">
          Các sản phẩm đã xem
        </h4>
        <div className="w-full flex gap-x-2">
          <ProductSlide data={productRecently}></ProductSlide>
        </div>
      </section>
    </section>
  );
};

export default CheckoutPage;
