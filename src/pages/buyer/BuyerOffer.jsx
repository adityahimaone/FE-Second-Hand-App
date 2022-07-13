import React from "react";
import style from "./buyeroffer.module.css";
import Button from "react-bootstrap/esm/Button";
import { Component } from "react";
import Alert from "components/UI/Alert/Alert";
import { useState } from "react";
// import { Alert } from "bootstrap";

function BuyerOffert() {
  const [text, enableButton] = useState("");
  // state = {
  //     disabled: true
  // }

  // const [tawarSuccess, setTawarSuccess] = useState(false);

  // console.log(tawarSuccess, "tawarSuccess");
  // render() {
  return (
    <div className="container-sm w-75 my-5">
      {/* {tawarSuccess && (
                    <Alert 
                        title=" Tawaran Success"
                        text="Harga tawarmu berhasil dikirim ke penjual"
                    />
                    
                )} */}
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="mb-4">
            <img src="/images/detail.png" className="img-fluid w-100" alt="" />
          </div>
          <div className="card p-3">
            <h5 className="font-14 fw-bolder">Deskripsi</h5>
            <p className="font-14 color-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card p-3">
            <h4 className="font-16 fw-bolder">Jam Tangan</h4>
            <h3 className="font-14 color-gray">Aksesoris</h3>
            <h2 className="font-16">Rp. 250.000</h2>
            <button
              className={`button-primary-1 w-100 my-3 disabled ${style["disabled"]}`}
              href="#"
              disabled="this.state.disabled"
            >
              <p>Menunggu respon penjual</p>
            </button>
          </div>
          <div className="card p-3 mt-2 d-flex flex-row justify-content-start align-items-center gap-2">
            <div>
              <img src="/images/person.png" className="img-fluid" alt="" />
            </div>
            <div className="d-flex flex-column">
              <label>Nama Penjual</label>
              <label>Kota</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
}

export default BuyerOffert;

//{`card p-3 mt-4 d-flex flex-row justify-content-start align-items-center gap-2 ${style["seller"]}`}
