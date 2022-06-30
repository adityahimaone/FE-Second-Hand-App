import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDefault from "./components/layout/default";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductDetail from "./pages/ProductDetail";
import HomePage from "./pages/HomePage";
// import Modal from "./component/UI/Modal/Modal"
// import ModalNotif from "./component/UI/Modal_Notif/ModalNotif";
// import ModalStatus from "./component/UI/Modal_Status/ModalStatus";
import BuyerProduct from "./pages/buyer/BuyerProduct";
// import { useReducer } from 'react';
import store from "./store/store";
import BuyerNotification from "./pages/buyer/BuyerNotification";
import ProductSellingList from "./pages/ProductSellingList";
import SellerSemuaProduk from "./pages/seller/SellerSemuaProduk";
import AddProduct from "./pages/seller/AddProduct";
import BuyerHalamanProduk from "./pages/buyer/BuyerHalamanProduk";
import InfoProfil from "./pages/InfoProfil";
// import ModalNotifBuyer from "./components/UI/Modal_Notif_Buyer/ModalNotifBuyer";

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="/bproduct" element={<BuyerProduct />} />
          <Route path="/notifbuyer" element={<BuyerNotification />} />
          <Route path="/productsellinglist" element={<ProductSellingList />} />
          <Route path="/seller" element={<SellerSemuaProduk />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/infoprofil" element={<InfoProfil />} />
          <Route path="/buyerhalaman" element={<BuyerHalamanProduk />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesPage;
