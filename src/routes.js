import React from "react";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDefault from "./component/layout/default";

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage;
