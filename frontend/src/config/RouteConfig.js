import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../components/pages/homepage/HomePage"));

const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/test" element={<div>test</div>}></Route>
      </Routes>
    </>
  );
};

export default RouteConfig;
