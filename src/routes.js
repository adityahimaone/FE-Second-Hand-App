import React from "react";
import Home from "./pages/home";
import Modal from "./component/UI/Modal/Modal"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDefault from "./component/layout/default";

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Home />} />
          <Route path="modal" element={<Modal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage;
