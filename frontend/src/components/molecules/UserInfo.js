import React from "react";
import avt from "../../assets/avt.png";

const items = [
  { id: 1, title: "Thông tin tài khoản" },
  { id: 2, title: "Đổi mật khẩu" },
  { id: 3, title: "Lịch sử đơn hàng" },
  { id: 4, title: "Sản phẩm yêu thích" },
  { id: 5, title: "Đăng xuất" },
];

const UserInfo = ({ actPart, onChangePart = () => {} }) => {
  return (
    <div className="left col-span-1 border flex flex-col items-center p-5">
      <img src={avt} alt="" className="w-14 h-14" />
      <h4 className="font-bold text-xl mt-3">Nguyễn Châu Thạch</h4>
      <ul className="flex flex-col w-full mt-5">
        {items.length > 0 &&
          items.map((item, index) => (
            <li
              key={index}
              className={`py-1 font-bold cursor-pointer ${
                item.id === actPart ? "text-secondary" : ""
              }`}
              onClick={() => onChangePart(item.id)}
            >
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserInfo;
