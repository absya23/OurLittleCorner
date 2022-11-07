import React from "react";
import { useNavigate } from "react-router-dom";
import { productData } from "../../../data/FakeData";
import Button from "../../atoms/Button";
import InputCombo from "../../molecules/InputCombo";
import ProductSlide from "../../organisms/product/ProductSlide";

const CartPage = () => {
  const navigate = useNavigate();
  const productRecently = productData;
  return (
    <div className="cart-page">
      <div className="container my-10">
        <CartPreviewList></CartPreviewList>
        <div className="mb-3">
          <p>Hỗ trợ ship 20k cho đơn hàng từ 300k nội thành HN, HCM</p>
          <p>Hỗ trợ ship 30k cho đơn hàng từ 500k các khu vực khác</p>
          <p>Đơn hàng trên website được xử lý trong giờ hành chính</p>
        </div>
        <div className="text-right mb-10">
          <p className="text-2xl font-black text-primary mb-3">
            Tổng: 500.000đ
          </p>
          <div className="button-group flex w-1/3 ml-auto justify-end gap-x-1">
            <Button
              className="w-auto px-5 rounded-3xl bg-primary text-lg hover:bg-hover normal-case"
              onClick={() => navigate("/product")}
            >
              Tiếp tục mua sắm
            </Button>
            <Button
              className="w-auto px-5 rounded-3xl bg-white text-lg border border-primary text-primary hover:bg-secondary hover:text-white normal-case"
              onClick={() => navigate("/cart/checkout")}
            >
              Thanh toán
            </Button>
          </div>
        </div>
        <section className="product-list-seen">
          <h4 className="font-bold text-black uppercase text-xl mb-4">
            Các sản phẩm đã xem
          </h4>
          <div className="w-full flex gap-x-2">
            <ProductSlide data={productRecently}></ProductSlide>
          </div>
        </section>
      </div>
    </div>
  );
};

const CartPreviewList = () => {
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
          <tr>
            <td>
              <img
                src="https://img.cdn.vncdn.io/nvn/ncdn/store/7534/ps/20221004/22093331.jpg"
                alt=""
                className="max-w-[100px] h-[100px]"
              />
            </td>
            <td>
              <p>Túi đeo vải I found a heaven</p>
            </td>
            <td>
              <p>140.000đ</p>
            </td>
            <td>
              <div className="flex w-full justify-center gap-x-1">
                <InputCombo className="items-center"></InputCombo>
              </div>
            </td>
            <td>
              <p>140.000đ</p>
            </td>
            <td>
              <p className="cursor-pointer">Xóa</p>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://img.cdn.vncdn.io/nvn/ncdn/store/7534/ps/20221004/22093331.jpg"
                alt=""
                className="max-w-[100px] h-[100px]"
              />
            </td>
            <td>
              <p>Túi đeo vải I found a heaven</p>
            </td>
            <td>
              <p>140.000đ</p>
            </td>
            <td>
              <div className="flex w-full justify-center gap-x-1">
                <InputCombo className="items-center"></InputCombo>
              </div>
            </td>
            <td>
              <p>140.000đ</p>
            </td>
            <td>
              <p className="cursor-pointer">Xóa</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CartPage;
