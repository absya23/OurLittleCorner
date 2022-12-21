import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { handleFetchCata, handleFetchType } from "../../../redux/handlers";
import PartTitle from "../../atoms/PartTitle";

// const data = [
//   {
//     id: 1,
//     name: "Set quà",
//     link: "/",
//     submenu: [
//       { id: "1.1", name: "Set quà yêu thương", link: "/" },
//       { id: "1.2", name: "Hoa số lượng lớn", link: "/" },
//       6,
//     ],
//   },
//   {
//     id: 2,
//     name: "Gấu bông và gối",
//     link: "/",
//     submenu: [
//       { id: "2.1", name: "Gấu bông cute", link: "/" },
//       { id: "2.2", name: "Gối chữ U", link: "/" },
//       { id: "2.3", name: "Gấu bông idol", link: "/" },
//       { id: "2.4", name: "Chăn mền", link: "/" },
//       { id: "2.5", name: "Gấu bông khác", link: "/" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Balo & túi tote",
//     link: "/",
//     submenu: [
//       { id: "3.1", name: "Túi đeo", link: "/" },
//       { id: "3.2", name: "Balo", link: "/" },
//     ],
//   },
//   {
//     id: 4,
//     name: "Văn phòng phẩm",
//     link: "/",
//     submenu: [
//       { id: "4.1", name: "Túi đeo", link: "/" },
//       { id: "4.2", name: "Balo", link: "/" },
//     ],
//   },
//   {
//     id: 5,
//     name: "Phụ kiện thời trang",
//     link: "/",
//     submenu: [
//       { id: "5.1", name: "Túi đeo", link: "/" },
//       { id: "5.2", name: "Balo", link: "/" },
//     ],
//   },
//   {
//     id: 6,
//     name: "Đồ chơi",

//     link: "/",
//     submenu: [
//       { id: "6.1", name: "Túi đeo", link: "/" },
//       { id: "6.2", name: "Balo", link: "/" },
//     ],
//   },
//   {
//     id: 7,
//     name: "Trang trí",
//     link: "/",
//     submenu: [
//       { id: "7.1", name: "Túi đeo", link: "/" },
//       { id: "7.2", name: "Balo", link: "/" },
//     ],
//   },
// ];

const ProductCategory = ({ activeCata = null, activeType = null }) => {
  // get data
  const { data: dataCata, loading: loadingCata } = useSelector(
    (state) => state.catalogue
  );
  const { data: dataType, loading: loadingType } = useSelector(
    (state) => state.typeProduct
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchCata());
    dispatch(handleFetchType());
  }, [dispatch]);
  // resolve
  const [showMenu, setShowMenu] = useState(true);
  const handleToggleMenu = () => {
    // if (!showMenu) {
    //   const submenus = document.querySelectorAll(".sub-data-list");
    //   Array.from(submenus).forEach((item) => item.classList.remove("show"));
    // }
    setShowMenu(!showMenu);
  };

  const openSubmenu = (e) => {
    const parent = e.target.closest(".data-item");
    parent.querySelector(".sub-data-list").classList.toggle("show");
  };

  useEffect(() => {
    if (activeType) {
      let string = `li[data-id="${activeType}"`;
      const submenus = document.querySelectorAll(".sub-data-list");
      Array.from(submenus).forEach((item) => {
        console.log(
          111,
          item?.querySelector(string)?.closest(".sub-data-list")
        );
        if (item.querySelector(string)) {
          item
            .querySelector(string)
            .closest(".sub-data-list")
            .classList.add("show");
        }
      });
    }
  }, [activeType]);

  return (
    <div className="mb-5 product-category">
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
        {dataCata.length > 0 &&
          dataCata.map((item) => (
            <li className={`data-item`} key={v4()} data-id={item.id_catalog}>
              <div
                className="flex items-center justify-between w-full p-2 bg-white border border-t-0 border-gray-200 border-x-0 hover:text-primary"
                onClick={(e) => openSubmenu(e)}
              >
                <Link
                  to={`/product?cata=${item.id_catalog}`}
                  className={`${
                    activeCata == item.id_catalog
                      ? "font-bold text-secondary"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
                <span className="cursor-pointer show-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
              <ul className={`w-full sub-data-list`}>
                {dataType.length > 0 &&
                  dataType.map((type) =>
                    type.id_catalog === item.id_catalog ? (
                      <li
                        className="p-2 pl-6 transition-none border border-gray-200 hover:text-primary"
                        key={v4()}
                        data-id={type.id_type}
                      >
                        <Link
                          to={`/product?cata=${item.id_catalog}&type=${type.id_type}`}
                          className={`${
                            activeType == type.id_type ? "text-secondary" : ""
                          }`}
                        >
                          {type.name}
                        </Link>
                      </li>
                    ) : null
                  )}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductCategory;
