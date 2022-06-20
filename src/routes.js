import React from "react";
import Home from "./pages/Home";
// import Modal from "./component/UI/Modal/Modal"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDefault from "./components/layout/default";
// import ModalNotif from "./component/UI/Modal_Notif/ModalNotif";
// import ModalStatus from "./component/UI/Modal_Status/ModalStatus";
import Login from "./pages/Login/Login";
import ProductDetail from "./pages/ProductDetail";

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage;
