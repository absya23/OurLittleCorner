import React, { useEffect, useState } from "react";
import PartTitle from "../../atoms/PartTitle";
import Dropdown from "../../molecules/Dropdown";
import PriceRange from "../../organisms/priceRange/PriceRange";
import ProductList from "../../organisms/product/ProductList";
import ProductCategory from "../../organisms/productCategory/ProductCategory";
import "./ProductPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { v4 } from "uuid";
import { handleFetchProduct } from "../../../redux/handlers";
import { ProductItemSkeleton } from "../../molecules/productItem/ProductItem";
import { useLocation } from "react-router-dom";
import axios from "axios";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ProductPage = () => {
  const { data: dataProd, loading: loadingProd } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchProduct());
    setLoading(true);
  }, [dispatch]);
  //
  const [dataProdGroup, setDataProdGroup] = useState(dataProd);
  const [loading, setLoading] = useState(false);
  // console.log(31, dataProdGroup);
  //
  let query = useQuery();
  let cataId = query.get("cata");
  let typeId = query.get("type");
  useEffect(() => {
    // console.log(39, cataId);
    if (cataId && !typeId) {
      setLoading(true);
      axios
        .get(`http://localhost:8000/api/product/cata/${cataId}`)
        .then((res) => {
          setDataProdGroup(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (typeId) {
      setLoading(true);
      axios
        .get(`http://localhost:8000/api/product/type/${typeId}`)
        .then((res) => {
          setDataProdGroup(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cataId, typeId]);
  return (
    <div className="mb-20 product-page">
      <div className="container flex mt-5 mb-5 gap-x-5">
        <div className="w-1/4 left">
          <ProductCategory
            activeCata={cataId}
            activeType={typeId}
          ></ProductCategory>
          <PriceRange></PriceRange>
        </div>
        <div className="w-3/4 content">
          <div className="flex w-full mb-2 content-head">
            <div className="flex-1">
              <PartTitle title="Sản phẩm"></PartTitle>
              <div className="w-full h-[1px] bg-primary mb-3"></div>
            </div>
            <div className="dropdown-filter h-full w-[150px] ml-5">
              <Dropdown></Dropdown>
            </div>
          </div>
          {!cataId && loadingProd && (
            <div className="grid grid-cols-4 gap-5 mb-20 product-list">
              {new Array(8).fill(0).map(() => (
                <ProductItemSkeleton key={v4()}></ProductItemSkeleton>
              ))}
            </div>
          )}
          {!cataId && !loadingProd && (
            <ProductList data={dataProd}></ProductList>
          )}
          {cataId && loading && (
            <div className="grid grid-cols-4 gap-5 mb-20 product-list">
              {new Array(8).fill(0).map(() => (
                <ProductItemSkeleton key={v4()}></ProductItemSkeleton>
              ))}
            </div>
          )}
          {cataId && !loading && (
            <ProductList data={dataProdGroup}></ProductList>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
