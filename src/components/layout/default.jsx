import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../UI/Header/Navbar";

function LayoutDefault() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default LayoutDefault;
