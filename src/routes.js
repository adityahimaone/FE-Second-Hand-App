import React from "react";
import Home from "./pages/home";
// import Modal from "./component/UI/Modal/Modal"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDefault from "./component/layout/default";
// import ModalNotif from "./component/UI/Modal_Notif/ModalNotif";
// import ModalStatus from "./component/UI/Modal_Status/ModalStatus";
import Login from "./pages/Login/Login";

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage;
