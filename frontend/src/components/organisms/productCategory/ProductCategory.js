import React, { useEffect, useState } from "react";
import PartTitle from "../../atoms/PartTitle";

const data = [
  {
    id: 1,
    name: "Set quà",
    link: "/",
    submenu: [
      { id: "1.1", name: "Set quà yêu thương", link: "/" },
      { id: "1.2", name: "Hoa số lượng lớn", link: "/" },
    ],
  },
  {
    id: 2,
    name: "Gấu bông và gối",
    link: "/",
    submenu: [
      { id: "2.1", name: "Gấu bông cute", link: "/" },
      { id: "2.2", name: "Gối chữ U", link: "/" },
      { id: "2.3", name: "Gấu bông idol", link: "/" },
      { id: "2.4", name: "Chăn mền", link: "/" },
      { id: "2.5", name: "Gấu bông khác", link: "/" },
    ],
  },
  {
    id: 3,
    name: "Balo & túi tote",
    link: "/",
    submenu: [
      { id: "3.1", name: "Túi đeo", link: "/" },
      { id: "3.2", name: "Balo", link: "/" },
    ],
  },
  {
    id: 4,
    name: "Văn phòng phẩm",
    link: "/",
    submenu: [
      { id: "4.1", name: "Túi đeo", link: "/" },
      { id: "4.2", name: "Balo", link: "/" },
    ],
  },
  {
    id: 5,
    name: "Phụ kiện thời trang",
    link: "/",
    submenu: [
      { id: "5.1", name: "Túi đeo", link: "/" },
      { id: "5.2", name: "Balo", link: "/" },
    ],
  },
  {
    id: 6,
    name: "Đồ chơi",
    link: "/",
    submenu: [
      { id: "6.1", name: "Túi đeo", link: "/" },
      { id: "6.2", name: "Balo", link: "/" },
    ],
  },
  {
    id: 7,
    name: "Trang trí",
    link: "/",
    submenu: [
      { id: "7.1", name: "Túi đeo", link: "/" },
      { id: "7.2", name: "Balo", link: "/" },
    ],
  },
];

const ProductCategory = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleToggleMenu = () => {
    if (!showMenu) {
      const submenus = document.querySelectorAll(".sub-data-list");
      Array.from(submenus).forEach((item) => item.classList.remove("show"));
    }
    setShowMenu(!showMenu);
  };

  const openSubmenu = (e) => {
    const parent = e.target.closest(".data-item");
    parent.querySelector(".sub-data-list").classList.toggle("show");
  };

  useEffect(() => {
    const btns = document.querySelectorAll(".show-icon");
    Array.from(btns).forEach((item) => {
      item.addEventListener("click", openSubmenu);
    });
    return () => {
      Array.from(btns).forEach((item) => {
        item.removeEventListener("click", openSubmenu);
      });
    };
  }, []);

  return (
    <div className="product-category mb-5">
      <PartTitle
        className="cursor-pointer"
        title="Danh mục sản phẩm"
        onClick={handleToggleMenu}
      >
        <span>
          {showMenu ? (
            <i className="fa-solid fa-minus"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </span>
      </PartTitle>
      <div className="w-full h-[1px] bg-primary mb-3"></div>
      <ul
        className={`data-list !h-[290px] overflow-auto bg-white border ${
          showMenu ? "show" : ""
        }`}
      >
        {data.length > 0 &&
          data.map((item) => (
            <li className="data-item" key={item.id}>
              <div className="w-full p-2 border bg-white border-t-0 border-x-0 border-gray-200 flex items-center justify-between hover:text-primary">
                <a href={item.link}>{item.name}</a>
                <span className="show-icon cursor-pointer">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
              <ul className="sub-data-list w-full">
                {item.submenu.length > 0 &&
                  item.submenu.map((subitem) => (
                    <li
                      className="p-2 border border-gray-200 pl-6 hover:text-primary transition-none"
                      key={subitem.id}
                    >
                      <a href={subitem.link}>{subitem.name}</a>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductCategory;
