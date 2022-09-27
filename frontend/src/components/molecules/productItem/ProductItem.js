import React from "react";
import "./ProductItem.scss";

const ProductItem = ({ tag = true }) => {
  return (
    <div className="product-item cursor-pointer">
      <div className="relative mb-2 image">
        {tag && (
          <span className="absolute top-0 left-0 z-10 px-2 py-1 text-white bg-primary">
            New
          </span>
        )}

        <img
          src="https://img.cdn.vncdn.io/nvn/ncdn/store/7534/ps/20220922/22090127_thumb.jpg"
          alt=""
        />
        <div className="product-action w-full bg-primary opacity-70 flex items-center justify-center gap-x-2 absolute left-0 bottom-0 py-1">
          <div className="heart cursor-pointer text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="cart cursor-pointer text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <h3 className="mb-3 name">
        Bình nước giữ nhiệt Rabbit all the best có tai 320ml
      </h3>
      <div className="font-extrabold price text-[17px]">150.000đ</div>
    </div>
  );
};

export default ProductItem;
