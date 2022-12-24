import React from "react";
import { Link } from "react-router-dom";
import avt from "../../assets/avt.png";

const items = [
  { id: 1, title: "Thông tin tài khoản" },
  { id: 2, title: "Đổi mật khẩu" },
  { id: 3, title: "Lịch sử đơn hàng" },
  { id: 4, title: "Sản phẩm yêu thích" },
  { id: 5, title: "Đăng xuất" },
];

const UserInfo = ({ name = {}, actPart, onChangePart = () => {} }) => {
  return (
    <div className="flex flex-col items-center col-span-1 p-5 border left">
      <img src={avt} alt="" className="w-14 h-14" />
      <h4 className="mt-3 text-xl font-bold">{name}</h4>
      <ul className="flex flex-col w-full mt-5">
        {items.length > 0 &&
          items.map((item, index) => (
            <Link
              key={index}
              className={`py-1 font-bold cursor-pointer ${
                item.id === actPart ? "text-secondary" : ""
              }`}
              onClick={() => onChangePart(item.id)}
              to={`/profile?part=${item.id}`}
            >
              {item.title}
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default UserInfo;
