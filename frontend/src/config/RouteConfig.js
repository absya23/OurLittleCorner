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
      </Routes>
    </>
  );
};

export default RouteConfig;
