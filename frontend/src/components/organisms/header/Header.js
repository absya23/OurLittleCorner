import React from "react";
import "./Header.scss";
import Logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
import useHover from "../../../hook/useHover";

const headerNavData = [
  { id: 1, title: "TẤT CẢ", url: "/product" },
  { id: 2, title: "Set quà", url: "/setqua" },
  { id: 3, title: "Gấu bông và gối", url: "/gaubong" },
  { id: 4, title: "Balo & túi", url: "/balovstui" },
  { id: 5, title: "Văn phòng phẩm", url: "/vanphongpham" },
  { id: 6, title: "Phụ kiện thời trang", url: "/phukienthoitrang" },
  { id: 7, title: "Đồ chơi", url: "/dochoi" },
  { id: 8, title: "Trang trí", url: "/trangtri" },
];

const Header = () => {
  // cart
  const { hovered: cartHover, nodeRef: cartRef } = useHover();

  return (
    <header className="w-full header">
      {/* content */}
      <div className="header-content h-[100px] shadow-sm w-full">
        <div className="container flex items-center justify-between h-full">
          {/* left */}
          <Link to="/" className="header--left">
            <img src={Logo} alt="" className="h-16 cursor-pointer " />
          </Link>
          {/* center  */}
          <div className="header--center w-[570px] flex flex-col">
            <div className="flex items-center justify-between h-10 mt-3 overflow-hidden border-2 rounded-lg input-group max border-primary">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                className="flex-1 px-5 py-2 outline-none"
              />
              <button
                className="h-full px-3 border-0 outline-none cursor-pointer bg-primary hover:bg-secondary"
                onClick={() => {}}
              >
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
            <ul className="flex mt-1 research gap-x-3 text-note">
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
          <div className="flex items-center header--right justify-content gap-x-5 relative">
            <div className="flex items-end justify-between font-bold gap-x-2">
              <NavLink to="/user/signin">Đăng nhập</NavLink>
              <span>|</span>
              <NavLink to="/user/signup">Đăng ký</NavLink>
            </div>
            <div className="relative cursor-pointer cart-count" ref={cartRef}>
              <span className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-white translate-x-3 -translate-y-2 rounded-full bg-third">
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
              {cartHover && <Cart></Cart>}
            </div>
          </div>
        </div>
      </div>
      {/* navigate */}
      <HeaderNav data={headerNavData}></HeaderNav>
    </header>
  );
};

const HeaderNav = ({ data }) => {
  return (
    <div className="w-full header-navigation bg-primary">
      <div className="container max-w-[1280px] text-menu">
        <ul className="flex items-center justify-start header-menu-nav gap-x-3">
          {data.length > 0 &&
            data.map((item, index) => (
              <li key={index}>
                <NavLink to={item.url} activeclassname="active">
                  {item.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
