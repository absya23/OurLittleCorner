import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserInfo from "../../molecules/UserInfo";
import UserFav from "./UserFav";
import UserOrder from "./UserOrder";
import UserPassword from "./UserPassword";
import UserProfile from "./UserProfile";

const ProfilePage = () => {
  const [actPart, setActPart] = useState(1);
  return (
    <div className="profile-page container flex flex-col my-10">
      <div className="flex items-center gap-x-2 pb-5">
        <Link to="/">Trang chủ</Link>
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
        <Link>Thông tin tài khoản</Link>
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
        <Link className="text-primary font-bold">Hồ sơ</Link>
      </div>
      <div className="content grid grid-cols-4 gap-x-10">
        <UserInfo
          actPart={actPart}
          onChangePart={(number) => setActPart(number)}
        ></UserInfo>
        {actPart === 1 && <UserProfile></UserProfile>}
        {actPart === 2 && <UserPassword></UserPassword>}
        {actPart === 3 && <UserOrder></UserOrder>}
        {actPart === 4 && <UserFav></UserFav>}
      </div>
    </div>
  );
};

export default ProfilePage;
