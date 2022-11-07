import React from "react";
import { useNavigate } from "react-router-dom";
import { removeVietnameseTones } from "../../../handlers/handleConvertUrl";
import "./ProductItem.scss";

const ProductItem = ({
  id = 1,
  tag = true,
  title = "EMPTY",
  price = "EMPTY",
  image = "https://img.cdn.vncdn.io/nvn/ncdn/store/7534/ps/20221004/22093331.jpg",
}) => {
  const convertTitle = removeVietnameseTones(title);
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer product-item">
      <div className="relative mb-2 image">
        {tag && (
          <span className="absolute top-0 left-0 z-10 px-2 py-1 text-white bg-primary">
            New
          </span>
        )}

        <img
          src={image}
          alt=""
          onClick={() =>
            navigate(`/${convertTitle}`, { state: { id }, replace: true })
          }
        />
        <div className="absolute bottom-0 left-0 flex items-center justify-center w-full py-1 product-action bg-primary opacity-70 gap-x-2">
          <div className="text-white cursor-pointer heart">
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
          <div className="text-white cursor-pointer cart">
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
      <div
        className="flex flex-col"
        onClick={() => navigate(`/${convertTitle}`, { state: { id } })}
      >
        <h3 className="mb-3 name">{title}</h3>
        <div className="font-extrabold price text-[17px]">{price}đ</div>
      </div>
    </div>
  );
};

export const ProductItemMini = ({
  id = 1,
  title = "EMPTY",
  price = "EMPTY",
  image = "https://img.cdn.vncdn.io/nvn/ncdn/store/7534/ps/20221004/22093331.jpg",
}) => {
  const convertTitle = removeVietnameseTones(title);
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer product-item">
      <div className="relative mb-2 image">
        <img
          src={image}
          alt=""
          onClick={() => navigate(`/${convertTitle}`, { state: { id } })}
        />
        <div className="absolute bottom-0 left-0 flex items-center justify-center w-full py-1 product-action bg-primary opacity-70 gap-x-2">
          <div className="text-white cursor-pointer heart">
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
          <div className="text-white cursor-pointer cart">
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
      <div
        className="flex flex-col"
        onClick={() => navigate(`/${convertTitle}`, { state: { id } })}
      >
        <h3 className="mb-3 name break-line-2">{title}</h3>
        <div className="font-extrabold price text-[17px]">{price}đ</div>
      </div>
    </div>
  );
};

export const ProductItemImage = ({
  name = "EMPTY",
  image = "https://img.cdn.vncdn.io/nvn/ncdn/store/7534/ps/20221004/22093331.jpg",
}) => {
  return (
    <div className="cursor-pointer product-item-2">
      <div className="relative mb-2 image">
        <img src={image} alt="" />
        <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-white product-action opacity-70">
          <span className="text">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
