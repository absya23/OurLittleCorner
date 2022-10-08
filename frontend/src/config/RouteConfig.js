import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../components/pages/homepage/HomePage"));
const ProductPage = lazy(() =>
  import("../components/pages/productpage/ProductPage")
);
const SignInPage = lazy(() => import("../components/pages/user/SignInPage"));
const SignUpPage = lazy(() => import("../components/pages/user/SignUpPage"));

const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/user/signin" element={<SignInPage />}></Route>
        <Route path="/user/signup" element={<SignUpPage />}></Route>
        <Route path="/test" element={<div>test</div>}></Route>
        <Route path="*" element={<div>Not found</div>}></Route>
      </Routes>
    </>
  );
};

export default RouteConfig;
