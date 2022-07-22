import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductSeller } from "store/action/ProductSellerAction";
import { getProductByIDWithAuth } from "store/action/productAction";
import { ConvertToIDR } from "utils/helper";
import { toast, ToastContainer } from "react-toastify";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import DeleteProduct from "./seller/AddProduct/DeleteProduct";

function ProductDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { id } = useParams();

  const {
    isLoading: isLoadingDataById,
    data: productByIdData,
    error,
  } = useSelector((state) => state.product_by_id);

  const { data: loginData } = useSelector((state) => state.login);
  const token = loginData?.data?.token;

  const productData = productByIdData?.data;
  const ownerData = productByIdData?.data?.owner;

  const [success, setSuccess] = useState(false);

  const result = {};
  useEffect(() => {
    dispatch(getProductByIDWithAuth(id, token));
    if (success === true) {
      setTimeout(() => (navigate(-1)), 4000)
      toast.success("Produk berhasil dihapus", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [success]);

  const handleDeleteProductSeller = () => {
    dispatch(deleteProductSeller(token, id, setSuccess));
    setShow(false);
  };

  console.log(result, "result");

  return (
    <div className="container position-relative">
      <ToastContainer />
      <div className="w-100 d-flex justify-content-center">
        {isLoadingDataById ? (
          <div className="gap-2">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
          </div>
        ) : null}
      </div>
      {show && (
        <DeleteProduct
          setShow={() => setShow(false)}
          setDelete={handleDeleteProductSeller}
        />
      )}
      <div className="w-max-968 mx-auto w-100 my-lg-5">
        <div className="row">
          <div className="col-12 p-0 p-xss-0 col-lg-8">
            <div className="mb-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="button-icon rounded-circle position-absolute start-0 mt-2 mt-md-2 mt-lg-2 mt-xl-0 ms-2"
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
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="card p-3 d-none d-xss-block">
              <h5 className="font-14 fw-bolder">Deskripsi</h5>
              <p className="font-14 color-gray">{productData?.deskripsi}</p>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-0 p-md-0 ps-lg-2 mt-3 mt-md-3 mt-lg-0 ">
            <div className="card p-3 detail-section">
              <h4 className="font-16 fw-bolder">{productData?.nama}</h4>
              <h3 className="font-14 color-gray">
                {productData?.category?.nama}
              </h3>
              <h2 className="font-16">{ConvertToIDR(productData?.harga)}</h2>
              <button
                type="button"
                className="button-outline-2 d-none d-xss-block"
                onClick={() => setShow(true)}
              >
                Delete
              </button>
              <button
                type="button"
                className="button-primary-1 d-none d-xss-block mt-3"
                onClick={() => navigate(`/product/edit/${id}`)}
              >
                Edit
              </button>
            </div>
            <div className="card rounded-4 p-3 mt-3 d-flex flex-row justify-content-start align-items-center gap-3">
              <div>
                <img
                  src={
                    ownerData?.avatar ? ownerData.avatar : "/images/person.png"
                  }
                  style={{
                    width: "52px",
                    height: "52px",
                    objectFit: "cover",
                  }}
                  className="rounded"
                  alt=""
                />
              </div>
              <div className="d-flex flex-column">
                <span>{ownerData?.nama}</span>
                <span>Kota</span>
              </div>
            </div>
            <div className="fixed-bottom m-2">
              <button
                type="button"
                className="button-outline-2 w-100 d-block d-xss-none mb-2"
              >
                Delete
              </button>
              <button
                type="button"
                className="button-primary-1 w-100 d-block d-xss-none "
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
