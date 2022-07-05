import React, { useEffect } from "react";
import style from "./buyeroffer.module.css";
import Button from "react-bootstrap/esm/Button";
import { Component } from "react";
// import Alert from "../../components/UI/Alert/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ModalTawar from "src/components/UI/Modal_Tawar/ModalTawar";
import Style from "../../components/UI/Modal_Tawar/Tawar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID, getAllProduct } from "src/store/action/productAction";
import { useParams } from "react-router-dom";
import { ConvertToIDR } from "../../utils/helper";

function BuyerHalamanProduk() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [text, enableButton] = useState("");
  const navigate = useNavigate();
  // const [openModalTawar, setOpenModalTawar] = useState(false)

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    isLoading,
    data: productByIdData,
    error,
  } = useSelector((state) => state.product_by_id);

  useEffect(() => {
    dispatch(getProductByID(id));
  }, []);

  console.log(productByIdData, "productByIdData");

  const productData = productByIdData?.data;
  const ownerData = productByIdData?.data?.owner;

  console.log(productData, ownerData, "ownerData");

  return (
    <div className="container-sm w-75 my-5">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="mb-4">
            <img
              src={
                productData.product_image
                  ? productData.product_image[0].url
                  : "/images/detail.png"
              }
              className="img-detail"
              alt=""
            />
          </div>
          <div className="card p-3">
            <h5 className="font-14 fw-bolder">Deskripsi</h5>
            <p className="font-14 color-gray">{productData.deskripsi}</p>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card p-3">
            <h4 className="font-16 fw-bolder">Jam Tangan</h4>
            <h3 className="font-14 color-gray">{productData.category.nama}</h3>
            <h2 className="font-16">{ConvertToIDR(productData.harga)}</h2>
            <Button
              onClick={handleShow}
              // onClick={() => {setOpenModalTawar(true);
              // }}
              className="button-primary-1"
            >
              Saya Tertarik dan ingin nego
            </Button>
            {/* {openModalTawar && <ModalTawar setOpenModalTawar={setOpenModalTawar} />} */}
          </div>
          <div className="card p-3 mt-2 d-flex flex-row justify-content-start align-items-center gap-3">
            <div>
              <img
                src={ownerData.avatar ? ownerData.avatar : "/images/person.png"}
                className="avatar-circle"
                alt=""
              />
            </div>
            <div className="d-flex flex-column">
              <label>{ownerData.nama}</label>
              <label>Kota</label>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <div
          className={`card position-absolute border-1 ${Style["card-style"]}`}
        >
          <div className="card-body p-4">
            <button type="button" class="btn-close" aria-label="Close"></button>
            <h1 className="card-text mb-0 mt-4 font-14 fw-semibold">
              Masukkan Harga Tawranmu
            </h1>
            <h2 className="card-text mt-2 mb-0 font-14 color-gray">
              Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu
              akan segera dihubungi penjual.
            </h2>
            <div
              className={`card-body rounded-4 p-3 mt-3 ${Style["card-body"]}`}
            >
              {/* Profile Product Match */}

              {/* Item Product Match */}
              <div className="item d-flex align-items-start mt-3">
                <img
                  src="/images/item watch.png"
                  alt=""
                  className={`rounded ${Style["item"]}`}
                />
                <div className="ms-2 align-content-center">
                  <p className="m-0 fw-normal font-14">Nama Pembeli</p>
                  <p className="m-0 fw-normal font-14">
                    <s>Rp. 250.000</s>
                  </p>
                </div>
              </div>
            </div>
            {/* Button */}
            <div
              className={`d-flex justify-content-center rounded-4 mt-4 ${Style["button"]}`}
            >
              <Button
                type="submit"
                className={`button-primary-1 w-100 ${Style["button-primary-1"]}`}
              >
                Kirim
              </Button>
              {/* <button type="submit" className={`button-primary-1 w-100 ${Style["button-primary-1"]}`} disabled={!text}>Kirim</button> */}
            </div>
          </div>
        </div>
      </Modal>
      {/* <ModalTawar show={show} >

      </ModalTawar> */}
    </div>
  );
  // }
}

export default BuyerHalamanProduk;

//{`card p-3 mt-4 d-flex flex-row justify-content-start align-items-center gap-2 ${style["seller"]}`}
