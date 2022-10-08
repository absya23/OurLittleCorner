import React from "react";
import { NavLink } from "react-router-dom";
import SignInForm from "../../organisms/form/SignInForm";
import "./userPage.scss";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div className="container">
        <div className="mx-auto content max-w-[600px] flex flex-col justify-center items-center mt-10 mb-20 border border-[#d0c8cd33]">
          <div className="w-full user-nav uppercase flex justify-evenly items-center bg-white shadow font-bold">
            <NavLink to="/user/signin" activeClassName="active">
              Đăng nhập
            </NavLink>
            <NavLink to="/user/signup" activeClassName="active">
              Đăng ký
            </NavLink>
          </div>
          <div className="form py-4 px-10 w-full">
            <SignInForm></SignInForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
