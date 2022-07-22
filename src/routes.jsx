import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductSearch from "pages/ProductSearch";
import UserMiddleware from "middleware/userMiddleware";
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
import EditProduct from "./pages/seller/AddProduct/EditProduct";
// import ModalNotifBuyer from "./components/UI/Modal_Notif_Buyer/ModalNotifBuyer";
// import ModalTawar from "./components/UI/Modal_Tawar/ModalTawar";

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<HomePage />} />
          <Route
            path="product/:id"
            element={
              <UserMiddleware>
                <ProductDetail />
              </UserMiddleware>
            }
          />
          <Route path="/buyeroffer" element={<BuyerOffer />} />
          <Route path="/notifbuyer" element={<BuyerNotification />} />
          {/* <Route path="/product" element={<ProductSellingList />} /> */}
          <Route
            path="/product/list"
            element={
              <UserMiddleware>
                <ProductSellerList />
              </UserMiddleware>
            }
          />
          <Route
            path="/product/sell"
            element={
              <UserMiddleware>
                <AddProduct />
              </UserMiddleware>
            }
          />
          <Route
            path="/product/edit/:id"
            element={
              <UserMiddleware>
                <EditProduct />
              </UserMiddleware>
            }
          />
          <Route
            path="/user/profile"
            element={
              <UserMiddleware>
                <InfoProfil />
              </UserMiddleware>
            }
          />
          <Route
            path="/penawaran"
            element={
              <UserMiddleware>
                <InfoPenawaran />
              </UserMiddleware>
            }
          />
          <Route path="/product/buy/:id" element={<BuyerHalamanProduk />} />
          <Route
            path="/notification"
            element={
              <UserMiddleware>
                <NotificationAll />
              </UserMiddleware>
            }
          />
          <Route
            path="/notification/:id"
            element={
              <UserMiddleware>
                <NotificationSeller />
              </UserMiddleware>
            }
          />
          <Route path="/product/search" element={<ProductSearch />} />
        </Route>
        <Route
          path="/status"
          element={
            <UserMiddleware>
              <StatusDiperbarui />
            </UserMiddleware>
          }
        />
        <Route
          path="/infoproduct"
          element={
            <UserMiddleware>
              <InfoProduct />
            </UserMiddleware>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesPage;
