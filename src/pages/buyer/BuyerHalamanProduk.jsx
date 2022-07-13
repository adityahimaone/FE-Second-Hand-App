import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import style from "./buyeroffer.module.css";
import Button from "react-bootstrap/esm/Button";
import { Component } from "react";
// import Alert from "../../components/UI/Alert/Alert";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ModalTawar from "components/UI/Modal_Tawar/ModalTawar";
import Style from "components/UI/Modal_Tawar/Tawar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID, getAllProduct } from "store/action/productAction";
import { useParams } from "react-router-dom";
import { ConvertToIDR } from "utils/helper";
import ModalOffer from "components/UI/Modal_Tawar/ModalOffer";

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
  const portalDiv = document.getElementById("modal");

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOffer
          show={show}
          handleClose={handleClose}
          data={productByIdData?.data}
        />,
        portalDiv
      )}
      <div className="container-sm w-75 my-5">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="mb-4">
              <img
                src={
                  productData?.product_image
                    ? productData.product_image[0].url
                    : "/images/detail.png"
                }
                className="img-detail"
                alt=""
              />
            </div>
            <div className="card p-3">
              <h5 className="font-14 fw-bolder">Deskripsi</h5>
              <p className="font-14 color-gray">{productData?.deskripsi}</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card p-3">
              <h4 className="font-16 fw-bolder">{productData?.nama}</h4>
              <h3 className="font-14 color-gray">
                {productData?.category?.nama}
              </h3>
              <h2 className="font-16">{ConvertToIDR(productData?.harga)}</h2>
              <button
                onClick={handleShow}
                // onClick={() => {setOpenModalTawar(true);
                // }}
                className="button-primary-1"
              >
                Saya Tertarik dan ingin nego
              </button>
              {/* {openModalTawar && <ModalTawar setOpenModalTawar={setOpenModalTawar} />} */}
            </div>
            <div className="card p-3 mt-2 d-flex flex-row justify-content-start align-items-center gap-3">
              <div>
                <img
                  src={
                    ownerData?.avatar ? ownerData.avatar : "/images/person.png"
                  }
                  className="avatar-circle"
                  alt=""
                />
              </div>
              <div className="d-flex flex-column">
                <label>{ownerData?.nama}</label>
                <label>Kota</label>
              </div>
            </div>
          </div>
        </div>

        {/* <ModalTawar show={show} >

      </ModalTawar> */}
      </div>
    </>
  );
}

export default BuyerHalamanProduk;
