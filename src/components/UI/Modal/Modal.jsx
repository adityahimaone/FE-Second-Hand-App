import React from "react";
import Style from "./Modal.module.css";

function Modal() {
  return (
    <div className={`card position-absolute border-1 ${Style["card-style"]}`}>
      <div className="card-body p-4">
        <button type="button" className={`${Style.close}`}>
          <img src="/images/close_button.svg" alt="" />
        </button>
        <h1 className="card-text mb-0 mt-4 font-14 fw-semibold">
          Yeay kamu berhasil mendapatkan harga yang sesuai
        </h1>
        <h2 className="card-text mt-2 mb-0 font-14 color-gray">
          Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
        </h2>
        <div className={`card-body rounded-4 p-3 mt-3 ${Style["card-body"]}`}>
          <p className="text-center font-14">Product Match</p>
          {/* Profile Product Match */}
          <div className="item d-flex align-items-center">
            <img
              src="/images/people image.jpg"
              alt=""
              className={`rounded ${Style.item}`}
            />
            <div className="ms-2 align-content-center">
              <p className="m-0 font-14">Nama Pembeli</p>
              <p className="m-0 fw-normal font-10 color-gray">Kota</p>
            </div>
          </div>
          {/* Item Product Match */}
          <div className="item d-flex align-items-start mt-3">
            <img
              src="/images/item watch.png"
              alt=""
              className={`rounded ${Style.item}`}
            />
            <div className="ms-2 align-content-center">
              <p className="m-0 fw-normal font-14">Nama Pembeli</p>
              <p className="m-0 fw-normal font-14">
                <s>Rp. 250.000</s>
              </p>
              <p className="m-0 fw-normal font-14">Ditawar Rp. 200.000</p>
            </div>
          </div>
        </div>
        {/* Button */}
        <div
          className={`d-flex justify-content-center rounded-4 mt-4 ${Style.button}`}
        >
          <button
            type="button"
            className="bg-transparent border-0 text-white ms-5"
          >
            Hubungi Penjual{" "}
            <img src="/images/whatsapp icon.svg" alt="" className="ms-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
