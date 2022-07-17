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
import BuyerOffer from "./pages/buyer/BuyerOffer";
// import { useReducer } from 'react';
import store from "./store/store";
import BuyerNotification from "./pages/buyer/BuyerNotification";
import ProductSellingList from "./pages/ProductSellingList";
import ProductSellerList from "./pages/seller/ProductList/ProductList";
import AddProduct from "./pages/seller/AddProduct/AddProduct";
import BuyerHalamanProduk from "./pages/buyer/BuyerHalamanProduk";
import InfoPenawaran from "./pages/Penawaran/infoPenawaran";
import InfoProfil from "./pages/InfoProfil";
// import SellerInfoProduk from "./pages/seller/SellerInfoProduk";
import NotificationSeller from "./pages/NotificationSeller";
import StatusDiperbarui from "./pages/StatusDiperbarui/StatusDiperbarui";
import InfoProduct from "./pages/InfoProductBuyer/InfoProduct";
import NotificationAll from "./pages/NotificationAll";
// import ModalNotifBuyer from "./components/UI/Modal_Notif_Buyer/ModalNotifBuyer";
// import ModalTawar from "./components/UI/Modal_Tawar/ModalTawar";

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="/buyeroffer" element={<BuyerOffer />} />
          <Route path="/notifbuyer" element={<BuyerNotification />} />
          {/* <Route path="/product" element={<ProductSellingList />} /> */}
          <Route path="/product/list" element={<ProductSellerList />} />
          <Route path="/product/sell" element={<AddProduct />} />
          <Route path="/user/profile" element={<InfoProfil />} />
          <Route path="/penawaran" element={<InfoPenawaran />} />
          <Route path="/product/buy/:id" element={<BuyerHalamanProduk />} />
          <Route path="/notification" element={<NotificationAll />} />
          <Route path="/notification/:id" element={<NotificationSeller />} />
        </Route>
        <Route path="/status" element={<StatusDiperbarui />} />
        <Route path="/infoproduct" element={<InfoProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesPage;
