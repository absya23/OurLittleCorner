import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { v4 } from "uuid";
import PartTitle from "../../atoms/PartTitle";
import Dropdown from "../../molecules/Dropdown";
import { ProductItemSkeleton } from "../../molecules/productItem/ProductItem";
import PriceRange from "../../organisms/priceRange/PriceRange";
import ProductList from "../../organisms/product/ProductList";
import ProductCategory from "../../organisms/productCategory/ProductCategory";

const filter = [
  {
    id: 1,
    title: "Mới nhất",
  },
  {
    id: 2,
    title: "Giá tăng dần",
  },
  {
    id: 3,
    title: "Giá giảm dần",
  },
];

const SearchPage = () => {
  const data = useLocation();
  const searchParam = data.state?.searchParam;
  const [loading, setLoading] = useState(true);
  const [dataProd, setDataProd] = useState([]);
  // console.log(searchParam);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/product/search/${searchParam}`)
      .then((res) => {
        // console.log(res.data.length / 8);
        setDataProd(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchParam]);
  return (
    <div className="mb-20 search-page">
      <div className="container flex mt-5 gap-x-5">
        {/* <div className="w-1/4 left">
          <ProductCategory></ProductCategory>
          <PriceRange></PriceRange>
        </div> */}
        <div className="w-3/4 content mx-auto">
          <div className="flex w-full mb-2 content-head">
            <div className="flex-1">
              <PartTitle title={`Tìm kiếm: "${searchParam}"`}></PartTitle>
              <div className="w-full h-[1px] bg-primary mb-3"></div>
            </div>
            {/*  */}
            {/* <div className="dropdown-filter h-full w-[150px] ml-5">
              <Dropdown
                data={filter}
                // chooseFilter={chooseFilter}
                // setChooseFilter={setChooseFilter}
              ></Dropdown>
            </div> */}
          </div>
          {loading && (
            <div className="grid grid-cols-4 gap-5 mb-20 product-list">
              {new Array(8).fill(0).map(() => (
                <ProductItemSkeleton key={v4()}></ProductItemSkeleton>
              ))}
            </div>
          )}
          {!loading && dataProd.length > 0 && (
            <ProductList itemsPerPage={12} data={dataProd}></ProductList>
          )}
          {dataProd.length === 0 && <p>Không có sản phẩm nào hợp lệ</p>}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
