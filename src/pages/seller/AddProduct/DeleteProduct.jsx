import React, { useState } from "react";

function DeleteProduct({setShow, setDelete}) {
  return (
    <div
      className="fixed-top"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="row mb-0">
        <div className="col-12">
          <div
            className="rounded-top d-flex justify-content-center ps-3 pe-3 pt-3 pb-3 align-items-center"
            style={{ marginTop: "40vh" }}
          >
            <div className="card p-4">
              <p className="m-0 fs-6">
                Apakah anda yakin untuk menghapus produk ini?
              </p>
              <button
                type="button"
                className="button-outline-2 mt-3"
                onClick={setShow}
              >
                Tidak
              </button>
              <button type="button" className="button-primary-1 mt-3" onClick={setDelete}>
                Ya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
