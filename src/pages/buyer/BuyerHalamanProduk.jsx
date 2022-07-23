import React, { useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/esm/Button";
// import Alert from "../../components/UI/Alert/Alert";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByID,
  getAllProduct,
  getProductByIDWithAuth,
} from "store/action/productAction";
import {
  getWishlist,
  addWishlist,
  deleteWishlist,
} from "store/action/wishlistAction";

import { ConvertToIDR } from "utils/helper";
import ModalOffer from "components/UI/Modal_Tawar/ModalOffer";
import style from "./buyeroffer.module.css";

function BuyerHalamanProduk() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [text, enableButton] = useState("");
  const navigate = useNavigate();
  // const [openModalTawar, setOpenModalTawar] = useState(false)
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [refreshPage, setRefreshPage] = useState(false);

  const {
    isLoading,
    data: productByIdData,
    error,
  } = useSelector((state) => state.product_by_id);

  const { data: loginData } = useSelector((state) => state.login);
  const token = loginData?.data?.token;

  const handleAddWishlist = () => {
    dispatch(addWishlist(token, id));
    setRefreshPage((prev) => !prev);
  };

  const handleDeleteWishlist = () => {
    const wishistID = productByIdData?.data?.user_wishlist[0]?.id;
    dispatch(deleteWishlist(token, wishistID));
    setRefreshPage((prev) => !prev);
  };

  console.log(productByIdData, "productByIdData");

  const productData = productByIdData?.data;
  const ownerData = productByIdData?.data?.owner;

  console.log(productData, ownerData, "ownerData");
  const portalDiv = document.getElementById("modal");

  const wishTrueConditional =
    token !== null && !productByIdData?.data?.user_wishlist?.length > 0;

  const wishFalseConditional =
    token !== null && productByIdData?.data?.user_wishlist?.length > 0;

  useEffect(() => {
    if (token) {
      dispatch(getProductByIDWithAuth(id, token));
    } else {
      dispatch(getProductByID(id));
    }
  }, [refreshPage]);

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
      <div className="container position-relative">
        <div className="w-max-968 mx-auto w-100 my-lg-5">
          <div className="row">
            <div className="col-12 p-0 p-xss-2 col-lg-8">
              <div className="mb-4 position-relative">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="button-icon bg-white rounded-circle position-absolute d-block d-xss-none"
                  style={{ top: "10px", left: "5px" }}
                >
                  <i className="bi bi-arrow-left fs-5" />
                </button>
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
              <div className="card p-3 d-none d-xss-block">
                <h5 className="font-14 fw-bolder">Deskripsi</h5>
                <p className="font-14 color-gray">{productData?.deskripsi}</p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card p-3 detail-section">
                <h4 className="font-16 fw-bolder">{productData?.nama}</h4>
                <h3 className="font-14 color-gray">
                  {productData?.category?.nama}
                </h3>
                <h2 className="font-16">{ConvertToIDR(productData?.harga)}</h2>
                {wishTrueConditional ? (
                  <button
                    type="button"
                    onClick={handleAddWishlist}
                    className="button-outline-2 d-none my-2 d-xss-block d-inline"
                  >
                    Wishlist
                    <i className="bi bi-heart-fill ms-2" />
                  </button>
                ) : null}
                {wishFalseConditional ? (
                  <button
                    type="button"
                    onClick={handleDeleteWishlist}
                    className="button-outline-2 d-none my-2 d-xss-block d-inline"
                  >
                    Unwishlist
                    <i className="bi bi-heart-fill ms-2" />
                  </button>
                ) : null}
                {token ? (
                  <button
                    type="button"
                    onClick={handleShow}
                    // onClick={() => {setOpenModalTawar(true);
                    // }}
                    className="button-primary-1 d-none d-xss-block "
                  >
                    Saya Tertarik dan ingin nego
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="button-primary-1 d-none d-xss-block "
                  >
                    Login untuk Nego
                  </button>
                )}
                {/* {openModalTawar && <ModalTawar setOpenModalTawar={setOpenModalTawar} />} */}
              </div>
              <div className="card p-3 mt-2 d-flex flex-row justify-content-start align-items-center gap-3">
                <div>
                  <img
                    src={
                      ownerData?.avatar
                        ? ownerData.avatar
                        : "/images/person.png"
                    }
                    className="avatar-circle"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-column">
                  <span>{ownerData?.nama}</span>
                  <span>Kota</span>
                </div>
              </div>
              <div className="card p-3 my-2 d-block d-xss-none">
                <h5 className="font-14 fw-bolder">Deskripsi</h5>
                <p className="font-14 color-gray">{productData?.deskripsi}</p>
              </div>
            </div>
          </div>
          <div className="fixed-bottom m-2">
            <button
              type="button"
              onClick={handleShow}
              className="button-primary-1 w-100 d-block d-xss-none "
            >
              Saya Tertarik dan ingin nego
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyerHalamanProduk;
