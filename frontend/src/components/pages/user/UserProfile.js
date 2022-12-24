import React from "react";
import { useUser } from "../../../context/userContext";

const UserProfile = () => {
  const userContext = useUser();
  let user = userContext.user;
  return (
    <div className="col-span-3 p-5 border right flex-4">
      <h3 className="font-bold uppercase">HỒ SƠ CỦA TÔI</h3>
      <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      <hr />
      <form action=""></form>
    </div>
  );
};

export default UserProfile;
