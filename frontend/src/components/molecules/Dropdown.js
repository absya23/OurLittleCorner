import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom";
import useClickOutside from "../../hook/useClickOutside";

const Dropdown = () => {
  const [input, setInput] = useState("Mới nhất");
  const { nodeRef: dropdownRef, show, setShow } = useClickOutside();
  const [coords, setCoords] = useState({});

  useEffect(() => {
    function handleChoose(e) {
      if (e.target.classList.contains("item")) {
        // console.log(e.target.innerText);
        setInput(e.target.innerText);
        setShow(false);
      }
    }
    if (show) {
      var items = Array.from(document.querySelectorAll(".item"));
      if (items)
        items.forEach((item) => {
          item.addEventListener("click", handleChoose);
        });
    }
    return () => {
      if (items) {
        items.forEach((item) => {
          item.removeEventListener("click", handleChoose);
        });
      }
    };
  });
  const handleClick = (e) => {
    setShow(!show);
    setCoords(dropdownRef.current.getBoundingClientRect());
  };
  return (
    <div className="dropdown relative w-full max-w-[500px]" ref={dropdownRef}>
      <div
        className="w-full px-3 py-2 border border-gray-200 rounded-lg cursor-pointer input"
        onClick={handleClick}
      >
        {input}
      </div>
      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};

function DropdownList({ coords }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="dropdown-list absolute left-0 w-[150px] bg-white border border-gray-200 rounded-lg top-full z-[1000]"
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        width: coords.width,
      }}
    >
      <div className="p-3 cursor-pointer item">Mới nhất</div>
      <div className="p-3 cursor-pointer item">Giá tăng dần</div>
      <div className="p-3 cursor-pointer item">Giá giảm dần</div>
    </div>,
    document.querySelector("body")
  );
}

export default Dropdown;
