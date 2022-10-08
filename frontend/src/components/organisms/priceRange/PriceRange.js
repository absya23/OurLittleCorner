import React from "react";
import PartTitle from "../../atoms/PartTitle";

const PriceRange = () => {
  return (
    <div class="price-range">
      <PartTitle title="GIÁ" className="uppercase"></PartTitle>
      <div className="w-full h-[1px] bg-primary mb-3"></div>
      <div className="price-filter">
        <div className="flex gap-x-2 mb-4">
          Từ
          <span id="price-from">0đ</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
          <span id="price-to">500,000đ</span>
        </div>
        <div className="price-bar bg-[#d3d3d3] h-2 w-full">
          <div className="active-range bg-primary h-full w-1/2"></div>
          <a href="#" className="range-handler" style={{ left: 0 }}></a>
          <a href="#" className="range-handler" style={{ left: "50%" }}></a>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
