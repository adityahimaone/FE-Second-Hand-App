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
import InfoPenawaran from "./pages/Penawaran/infoPenawaran";
import InfoProfil from "./pages/InfoProfil";
// import SellerInfoProduk from "./pages/seller/SellerInfoProduk";
import NotificationSeller from "./pages/NotificationSeller";
// import ModalNotifBuyer from "./components/UI/Modal_Notif_Buyer/ModalNotifBuyer";

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="/buyerproduct" element={<BuyerProduct />} />
          <Route path="/notifbuyer" element={<BuyerNotification />} />
<<<<<<< HEAD
          <Route path="/productsellinglist" element={<ProductSellingList />} />
          <Route path="/seller" element={<SellerSemuaProduk />} />
          <Route path="/sellerinfo" element={<SellerInfoProduk />} />
          <Route path="/infoprofil" element={<InfoProfil />} />
=======
>>>>>>> 87bb389cc587a1b4607e63bfa388d74d4d198906
          {/* <Route path="/product" element={<ProductSellingList />} /> */}
          <Route path="/product/list" element={<SellerSemuaProduk />} />
          <Route path="/product/sell" element={<AddProduct />} />
          <Route path="/user/profile" element={<InfoProfil />} />
          <Route path="/product/buy/:id" element={<BuyerHalamanProduk />} />
        </Route>
        <Route path="/notification" element={<NotificationSeller />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesPage;
