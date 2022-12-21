import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/cartContext";
import { productData } from "../../../data/FakeData";
import { removeVietnameseTones } from "../../../handlers/handleConvertUrl";
import handleFormatNumber from "../../../handlers/handleFormatNumber";
import Button from "../../atoms/Button";
import InputCombo from "../../molecules/InputCombo";
import ProductSlide from "../../organisms/product/ProductSlide";
import emptyCart from "../../../assets/emptyCartPage.png";

const CartPage = () => {
  const navigate = useNavigate();
  const productRecently = productData;
  // get data from cart context
  const cartContext = useCart();

  return (
    <div className="cart-page">
      {cartContext?.cart?.length > 0 ? (
        <div className="container my-10">
          <CartPreviewList
            data={cartContext?.cart}
            removeProductFromCart={cartContext?.removeProductFromCart}
            updateQuantityFromCart={cartContext?.updateQuantityFromCart}
          ></CartPreviewList>
          <div className="mb-3">
            <p>Hỗ trợ ship 20k cho đơn hàng từ 300k nội thành HN, HCM</p>
            <p>Hỗ trợ ship 30k cho đơn hàng từ 500k các khu vực khác</p>
            <p>Đơn hàng trên website được xử lý trong giờ hành chính</p>
          </div>
          <div className="mb-10 text-right">
            <p className="mb-3 text-2xl font-black text-primary">
              Tổng: {handleFormatNumber(cartContext?.totalMoney())}đ
            </p>
            <div className="flex justify-end w-1/3 ml-auto button-group gap-x-1">
              <Button
                className="w-auto px-5 text-lg normal-case rounded-3xl bg-primary hover:bg-hover"
                onClick={() => navigate("/product")}
              >
                Tiếp tục mua sắm
              </Button>
              <Button
                className="w-auto px-5 text-lg normal-case bg-white border rounded-3xl border-primary text-primary hover:bg-secondary hover:text-white"
                onClick={() => navigate("/cart/checkout")}
              >
                Thanh toán
              </Button>
            </div>
          </div>
          <section className="product-list-seen">
            <h4 className="mb-4 text-xl font-bold text-black uppercase">
              Các sản phẩm đã xem
            </h4>
            <div className="flex w-full gap-x-2">
              <ProductSlide data={productRecently}></ProductSlide>
            </div>
          </section>
        </div>
      ) : (
        <div className="container my-10">
          <div className="flex w-full gap-x-4">
            <img src={emptyCart} alt="" className="w-1/2" />
            <div className="flex flex-col items-center justify-center gap-y-2">
              <h2 className="text-2xl font-bold text-secondary">
                Không có sản phẩm nào 😥
              </h2>
              <Button
                className="w-auto px-5 mt-2 mb-4 text-lg normal-case rounded-3xl bg-primary hover:bg-hover"
                onClick={() => navigate("/product")}
              >
                Mua sắm ngay
              </Button>
              <div className="mb-3 ">
                <p>Hỗ trợ ship 20k cho đơn hàng từ 300k nội thành HN, HCM</p>
                <p>Hỗ trợ ship 30k cho đơn hàng từ 500k các khu vực khác</p>
                <p>Đơn hàng trên website được xử lý trong giờ hành chính</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CartPreviewList = ({
  data,
  removeProductFromCart = () => {},
  updateQuantityFromCart = () => {},
}) => {
  const sum = (price, quantity) => {
    return Number(price) * Number(quantity);
  };
  // const convertTitle = removeVietnameseTones(title);
  const navigate = useNavigate();
  return (
    <section className="mb-5">
      <table className="w-full py-4">
        <thead>
          <tr>
            <th width="20%" className="">
              Sản phẩm
            </th>
            <th width="25%" className="">
              Mô tả
            </th>
            <th width="15%" className="">
              Đơn giá
            </th>
            <th width="15%" className="">
              Số lượng
            </th>
            <th width="15%" className="">
              Tổng
            </th>
            <th width="10%" className="">
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt=""
                    className="max-w-[100px] h-[100px] cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/product/${removeVietnameseTones(item.title)}`,
                        {
                          state: { id: item.id },
                        }
                      )
                    }
                  />
                </td>
                <td>
                  <p
                    className="cursor-pointer hover:text-secondary "
                    onClick={() =>
                      navigate(
                        `/product/${removeVietnameseTones(item.title)}`,
                        {
                          state: { id: item.id },
                        }
                      )
                    }
                  >
                    {item.title}
                  </p>
                </td>
                <td>
                  <p>{handleFormatNumber(Number(item.price))}đ</p>
                </td>
                <td>
                  <div className="flex justify-center w-full gap-x-1">
                    <InputCombo
                      type="CART"
                      id={item.id}
                      className="items-center"
                      quantity={item?.quantity}
                      max={item?.stock}
                      action={updateQuantityFromCart}
                    ></InputCombo>
                  </div>
                </td>
                <td>
                  <p>{handleFormatNumber(sum(item.price, item.quantity))}đ</p>
                </td>
                <td>
                  <p
                    className="cursor-pointer hover:text-red-500 hover:underline"
                    onClick={removeProductFromCart.bind(this, item.id)}
                  >
                    Xóa
                  </p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default CartPage;
