import React from "react";
import style from "./buyeroffer.module.css";
import Button from "react-bootstrap/esm/Button";
import { Component } from "react";
// import Alert from "../../components/UI/Alert/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ModalTawar from "src/components/UI/Modal_Tawar/ModalTawar";
import Style from "../../components/UI/Modal_Tawar/Tawar.module.css"

function BuyerHalamanProduk() {
  const [text, enableButton] = useState("");
  const navigate = useNavigate();
  // const [openModalTawar, setOpenModalTawar] = useState(false)

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="container-sm w-75 my-5">

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
            <Button
              onClick={handleShow}
              // onClick={() => {setOpenModalTawar(true);
              // }}
              className="button-primary-1">
              Saya Tertarik dan ingin nego
            </Button>
            {/* {openModalTawar && <ModalTawar setOpenModalTawar={setOpenModalTawar} />} */}
          </div>
          <div className="card p-3 mt-2 d-flex flex-row justify-content-start align-items-center gap-3">
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
      <Modal show={show} onHide={handleClose}>
      {/* <Modal.Header closeButton></Modal.Header> */}
        <div className={`card position-absolute border-1 ${Style["card-style"]}`}>
          <div className="card-body p-4">
            <button type="button" class="btn-close" aria-label="Close"></button>
            <h1 className="card-text mb-0 mt-4 font-14 fw-semibold">Masukkan Harga Tawranmu</h1>
            <h2 className="card-text mt-2 mb-0 font-14 color-gray">Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</h2>
            <div className={`card-body rounded-4 p-3 mt-3 ${Style["card-body"]}`}>

              {/* Profile Product Match */}

              {/* Item Product Match */}
              <div className='item d-flex align-items-start mt-3'>
                <img src="/images/item watch.png" alt="" className={`rounded ${Style["item"]}`} />
                <div className='ms-2 align-content-center'>
                  <p className='m-0 fw-normal font-14'>Nama Pembeli</p>
                  <p className='m-0 fw-normal font-14'><s>Rp. 250.000</s></p>
                </div>
              </div>

            </div>
            {/* Button */}
            <div className={`d-flex justify-content-center rounded-4 mt-4 ${Style["button"]}`}>
              <Button type="submit" className={`button-primary-1 w-100 ${Style["button-primary-1"]}`}>Kirim</Button>
              {/* <button type="submit" className={`button-primary-1 w-100 ${Style["button-primary-1"]}`} disabled={!text}>Kirim</button> */}
            </div>
          </div>
        </div>
      </Modal>
      {/* <ModalTawar show={show} >

      </ModalTawar> */}
    </div>


  )
  // }
}

export default BuyerHalamanProduk;

//{`card p-3 mt-4 d-flex flex-row justify-content-start align-items-center gap-2 ${style["seller"]}`}