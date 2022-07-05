import React from "react";
import { useNavigate } from "react-router-dom";

function NotificationSeller() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="w-max-570 w-100 my-4 position-relative">
          <button
            onClick={() => navigate(-1)}
            className="btn position-absolute"
            style={{ left: "-4.375rem" }}
          >
            <i className="bi bi-arrow-left fs-4"></i>
          </button>
          <div className="card d-flex flex-row p-2 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="pe-2">
                <img src="/images/person.png" className="img-fluid" alt="" />
              </div>
              <div className="d-flex flex-column">
                <span className="font-14">Nama Penjual</span>
                <span className="font-10">Kota</span>
              </div>
            </div>
          </div>
          <div className="my-3">
            <h6 className="font-14 fw-bolder">Daftar produkmu yang ditawar</h6>
          </div>
          <div>
            <div className="card p-2">
              <div className="row">
                <div className="col-2 d-flex justify-content-center">
                  <div>
                    <img
                      src="/images/person.png"
                      className="img-fluid rounded-2"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-10 d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <span className="font-10">Penawaran produk</span>
                    <span className="font-10">20 Apr, 14:04</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="font-14">Jam tangan casio</span>
                    <span className="font-14">Rp 250.000</span>
                    <span className="font-14">Ditawar Rp.200.00</span>
                  </div>
                  <div className="d-flex justify-content-end gap-2">
                    <button className="button-outline-2 px-5">Tolak</button>
                    <button className="button-primary-1 px-5">Terima</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationSeller;
