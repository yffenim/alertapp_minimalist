// 3. dynamic routing - root path will redirect to the Home component
// https://v5.reactrouter.com/web/guides/philosophy

import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

