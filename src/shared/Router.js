import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDats from "../pages/allDats";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllDats />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
