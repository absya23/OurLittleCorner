import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/layout/Main";
import Footer from "../components/organisms/footer/Footer";
import Header from "../components/organisms/header/Header";

const HomePage = lazy(() => import("../components/pages/homepage/HomePage"));
const ProductPage = lazy(() =>
  import("../components/pages/productpage/ProductPage")
);
const SingleProduct = lazy(() =>
  import("../components/pages/productpage/SingleProduct")
);
const SignInPage = lazy(() => import("../components/pages/user/SignInPage"));
const SignUpPage = lazy(() => import("../components/pages/user/SignUpPage"));
const CartPage = lazy(() => import("../components/pages/cart/CartPage"));
const ManageCatalog = lazy(() =>
  import("../components/pages/manage_catalog/ManageCatalog")
);
const ManageCoupon = lazy(() =>
  import("../components/pages/manage_coupon/ManageCoupon")
);
const ManageOrder = lazy(() =>
  import("../components/pages/manage_order/ManageOrder")
);
const ManageProduct = lazy(() =>
  import("../components/pages/manage_product/ManageProduct")
);
const ManageProductType = lazy(() =>
  import("../components/pages/manage_product_type/ManageProductType")
);
const ManageSlide = lazy(() =>
  import("../components/pages/manage_slide/ManageSlide")
);

const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          {/* <Route path="/product/:title" element={<ProductPage />}></Route> */}
          <Route path="/user/signin" element={<SignInPage />}></Route>
          <Route path="/user/signup" element={<SignUpPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/:title" element={<SingleProduct />}></Route>
          <Route path="/test" element={<div>test</div>}></Route>
          <Route path="*" element={<div>Not found</div>}></Route>
        </Route>
        <Route path="/admin/manage-slide" element={<ManageSlide />}></Route>
        <Route path="/admin/manage-catalog" element={<ManageCatalog />}></Route>
        <Route path="/admin/manage-coupon" element={<ManageCoupon />}></Route>
        <Route path="/admin/manage-order" element={<ManageOrder />}></Route>
        <Route path="/admin/manage-product" element={<ManageProduct />}></Route>
        <Route
          path="/admin/manage-product-type"
          element={<ManageProductType />}
        ></Route>
      </Routes>
    </>
  );
};

export default RouteConfig;
