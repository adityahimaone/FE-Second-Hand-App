import React from "react";
import Navbar from "../UI/Header/Navbar";
import { Outlet } from "react-router-dom";

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
