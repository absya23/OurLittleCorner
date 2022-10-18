import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import emptyCart from "../../../assets/emptyCart.png";

const cartData = [
  {
    id: 1,
    image:
      "https://img.cdn.vncdn.io/nvn/ncdn/store/7534/ps/20221004/22093331.jpg",
    title: "Túi đeo vải I found a heaven",
    price: "140.000đ",
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://img.cdn.vncdn.io/nvn/ncdn/store/7534/ps/20221004/Set_13_20__1__thumb.jpeg",
    title: "Túi đeo vải I found a heaven Túi đeo vải I found a heaven",
    price: "2.140.000đ",
    quantity: 10,
  },
];

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="cart w-[350px] bg-white rounded shadow-xl flex flex-col absolute top-full -right-5 z-[999999] p-4 cursor-default">
      <ul className="flex flex-col cart-list gap-y-3">
        {cartData.length === 0 ? (
          <EmptyCart></EmptyCart>
        ) : (
          cartData.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
            ></CartItem>
          ))
        )}
      </ul>

      {cartData.length === 0 ? (
        <Button
          className="w-full rounded-md bg-primary hover:bg-hover"
          onClick={() => navigate("/product")}
        >
          Mua sắm ngay
        </Button>
      ) : (
        <Fragment>
          <div className="flex items-center justify-between pt-4 pb-3">
            <span>Thành tiền</span>
            <span className="text-[#e53b37] font-bold">500.000đ</span>
          </div>
          <Button
            className="w-full rounded-md bg-primary hover:bg-hover"
            onClick={() => navigate("/cart")}
          >
            Xem giỏ hàng
          </Button>
        </Fragment>
      )}
    </div>
  );
};

const CartItem = ({ title, image, price, quantity }) => {
  return (
    <li className="flex items-center justify-between cursor-pointer cart-item">
      <img src={image} alt="" className="w-[88px] h-[88px] mr-3" />
      <div className="flex-1 item-info">
        <h4 className="font-bold break-line-2">{title}</h4>
        <p className="font-bold price text-[#e53b37]">Đơn giá: {price}</p>
        <div className="flex items-center quantity gap-x-1">
          <span className="cursor-pointer minus p-1 flex justify-center items-center border border-[#dee2e6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </span>
          <span className="px-2">{quantity}</span>
          <span className="cursor-pointer plus p-1 flex justify-center items-center border border-[#dee2e6]">
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
                d="M12 6v12m6-6H6"
              />
            </svg>
          </span>
        </div>
      </div>
      <i className="w-3 p-3 cursor-pointer fa-solid fa-trash hover:text-primary"></i>
    </li>
  );
};

const EmptyCart = () => {
  return (
    <div className="p-5 mb-5">
      <img src={emptyCart} alt="" className="w-full" />
    </div>
  );
};

export default Cart;
