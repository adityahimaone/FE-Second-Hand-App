import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID, getAllProduct } from "store/action/productAction";
import { ConvertToIDR } from "utils/helper";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const result = {};
  useEffect(() => {
    dispatch(getProductByID(id));
  }, []);

  const {
    isLoading,
    data: productByIdData,
    error,
  } = useSelector((state) => state.product_by_id);

  const productData = productByIdData?.data;
  const ownerData = productByIdData?.data?.owner;

  console.log(result, "result");

  return (
    <div className="container position-relative">
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
                className="img-fluid rounded-4"
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
                className="button-primary-2 d-none d-xss-block"
              >
                Delete
              </button>
              <button
                type="button"
                className="button-primary-2 d-none d-xss-block mt-3"
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
                // onClick={handleShow}
                // onClick={() => {setOpenModalTawar(true);
                // }}
                className="button-primary-1 w-100 d-block d-xss-none "
              >
                Saya Tertarik dan ingin nego
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
