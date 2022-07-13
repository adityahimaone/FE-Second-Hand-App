import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomToast() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-success btnspace"
        onClick={() =>
          toast.success("Status Product Berhasil Diperbarui", {
            position: toast.POSITION.TOP_CENTER,
          })
        }
      >
        Top Center
      </button>
      <ToastContainer />
    </div>
  );
}

export default CustomToast;
