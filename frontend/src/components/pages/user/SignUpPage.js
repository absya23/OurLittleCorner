import React from "react";
import { NavLink } from "react-router-dom";
import SignUpForm from "../../organisms/form/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="sign-in-page">
      <div className="container">
        <div className="mx-auto content max-w-[600px] flex flex-col justify-center items-center mt-10 mb-20 border border-[#d0c8cd33]">
          <div className="w-full user-nav uppercase flex justify-evenly items-center bg-white shadow font-bold">
            <NavLink to="/user/signin" activeclassname="active">
              Đăng nhập
            </NavLink>
            <NavLink to="/user/signup" activeclassname="active">
              Đăng ký
            </NavLink>
          </div>
          <div className="form py-4 px-10 w-full">
            <SignUpForm></SignUpForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
