/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Style from "./Status.module.css";

function ModalStatus() {
  const [text, enableButton] = useState("");

  const handleTextChange = (event) => {
    enableButton(event.target.value);
  };

  return (
    <div>
      <div
        className={`card position-absolute border-1 ${Style["card-status"]}`}
      >
        <div className="card-body p-4">
          <button
            type="button"
            className="bg-transparent p-0 border-0 position-absolute top-0 end-0 mt-4 me-4"
          >
            <img src="/images/close_button.svg" alt="" />
          </button>
          <h1 className="card-text mb-0 fs-6 mt-5">
            Perbarui status penjualan produkmu
          </h1>
          <div className="form-status mt-3">
            <form action="">
              <div className="form-check">
                <input
                  type="radio"
                  className={`form-check-input ${Style["input-status"]}`}
                  name="radioButton"
                  value="berhasil terjual"
                  onChange={handleTextChange}
                />
                <label className="form-check-label" >Berhasil Terjual</label>
                <br />
                <p className="fw-normal text-secondary mt-1">
                  kamu telah sepakat menjual produk ini kepada pembeli
                </p>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className={`form-check-input ${Style["input-status"]}`}
                  name="radioButton"
                  value="batalkan transaksi"
                  onChange={handleTextChange}
                />
                <label className="form-check-label">Batalkan Transaksi</label>
                <br />
                <p className="fw-normal text-secondary mt-1">
                  Kamu membatalkan transaksi produk ini dengan pembeli
                </p>
              </div>
              <button
                type="submit"
                className={`button-primary-1 w-100 ${Style["button-primary-1"]}`}
                disabled={!text}
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalStatus;
