import React from "react";
import { useNavigate } from "react-router-dom";

function StatusDiperbarui() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="shadow">
        <div className="container p-2">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-2">
              <button
                className="btn d-flex align-content-center"
                onClick={() => navigate("/")}
              >
                <span className="fs-5 w-100">Old But New</span>
              </button>
            </div>
            <div className="col-8 text-center">
              <span className="font-16">Info Penawar</span>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </nav>
      <div className="container w-max-570 my-4 position-relative">
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
              <span className="font-14">Nama Pembeli</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatusDiperbarui;
