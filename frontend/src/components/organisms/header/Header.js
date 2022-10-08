import React from "react";
import "./Header.scss";
import Logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header w-full">
      {/* content */}
      <div className="header-content h-[100px] shadow-sm w-full">
        <div className="container flex justify-between items-center h-full">
          {/* left */}
          <img src={Logo} alt="" className="h-16 header--left" />
          {/* center  */}
          <div className="header--center w-[570px] flex flex-col">
            <div className="h-10 input-group flex justify-between items-center max border-2 border-primary rounded-lg overflow-hidden mt-3">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                className="flex-1 px-5 py-2 outline-none"
              />
              <button className="px-3 h-full bg-primary hover:bg-secondary cursor-pointer outline-none border-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.6}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
            <ul className="research flex gap-x-3 text-note mt-1">
              <li>
                <a href="/product" className="text-sm">
                  Đồ chơi xếp hình
                </a>
              </li>
              <li>
                <a href="/product" className="text-sm">
                  Hộp bút
                </a>
              </li>
              <li>
                <a href="/product" className="text-sm">
                  Túi tote
                </a>
              </li>
              <li>
                <a href="/product" className="text-sm">
                  Sổ tay
                </a>
              </li>
            </ul>
          </div>
          {/* right */}
          <div className="header--right flex justify-content items-center gap-x-5">
            <div className="flex justify-between items-end gap-x-2 font-bold">
              <NavLink to="/user/signin">Đăng nhập</NavLink>
              <span>|</span>
              <NavLink to="/user/signup">Đăng ký</NavLink>
            </div>
            <div className="relative cart-count cursor-pointer">
              <span className="w-6 h-6 rounded-full bg-third text-white flex justify-center items-center absolute top-0 right-0 translate-x-3 -translate-y-2">
                0
              </span>
              <span>
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
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* navigate */}
      <div className="header-navigation w-full bg-primary">
        <div className="container max-w-[1280px] text-menu">
          <ul className="header-menu-nav flex gap-x-3 justify-start items-center">
            <li>
              <NavLink to="/product" activeClassName="active">
                TẤT CẢ
              </NavLink>
            </li>
            <li>
              <NavLink to="setqua" activeClassName="active">
                Set quà
              </NavLink>
            </li>
            <li>
              <NavLink to="/gaubong" activeClassName="active">
                Gấu bông và gối
              </NavLink>
            </li>
            <li>
              <NavLink to="/balovstui" activeClassName="active">
                Balo & túi tote
              </NavLink>
            </li>
            <li>
              <NavLink to="/vanphongpham" activeClassName="active">
                Văn phòng phẩm
              </NavLink>
            </li>
            <li>
              <NavLink to="/phukienthoitrang" activeClassName="active">
                Phụ kiện thời trang
              </NavLink>
            </li>
            <li>
              <NavLink to="/dochoi" activeClassName="active">
                Đồ chơi
              </NavLink>
            </li>
            <li>
              <NavLink to="/trangtri" activeClassName="active">
                Trang trí
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
