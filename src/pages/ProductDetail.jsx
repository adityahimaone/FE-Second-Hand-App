import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID } from "store/action/productAction";
import { deleteProductSeller } from "store/action/ProductSellerAction";
import { ConvertToIDR } from "utils/helper";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { id } = useParams();

  const {
    isLoading,
    data: productByIdData,
    error,
  } = useSelector((state) => state.product_by_id);

  const { data: loginData } = useSelector((state) => state.login);
  const token = loginData?.data?.token;

  const productData = productByIdData?.data;
  const ownerData = productByIdData?.data?.owner;

  const result = {};
  useEffect(() => {
    dispatch(getProductByID(id));
  }, []);

  const handleDeleteProductSeller = () => {
    dispatch(deleteProductSeller(token, id));
  };

  console.log(result, "result");

  return (
    <div className="container position-relative">
      {show && (
        // <div className="fixed">
        //   <div
        //   className="position-absolute top-50 start-50 translate-middle"
        //   style={{ zIndex: "1" }}
        // >
        //   <div className="card p-3" style={{ width: "20rem" }}>
        //     <p className="m-0 fs-6">Apakah kamu yakin untuk delete product?</p>
        //     <button
        //       type="button"
        //       className="button-outline-2 mt-2"
        //       onClick={() => setShow(false)}
        //     >
        //       Tidak
        //     </button>
        //     <button type="button" className="button-primary-1 mt-2">
        //       Ya
        //     </button>
        //   </div>
        // </div>
        // </div>
        <div
          className="fixed-top"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="row mb-0">
            <div className="col-12">
              <div
                className="rounded-top d-flex justify-content-center ps-3 pe-3 pt-3 pb-3 align-items-center"
                style={{ marginTop: "40vh" }}
              >
                <div className="card p-4">
                  <p className="m-0 fs-6">Apakah anda yakin untuk menghapus produk ini?</p>
                  <button
                    type="button"
                    className="button-outline-2 mt-3"
                    onClick={() => setShow(false)}
                  >
                    Tidak
                  </button>
                  <button
                    type="button"
                    className="button-primary-1 mt-3"
                  >
                    Ya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
