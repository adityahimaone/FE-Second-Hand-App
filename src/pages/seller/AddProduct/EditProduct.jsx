/* eslint-disable radix */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { getProductByIDWithAuth } from "store/action/productAction";
import {
  // getProductByID,
  editProductSeller,
} from "store/action/ProductSellerAction";
import { injectStyle } from "react-toastify/dist/inject-style";
import { toast, ToastContainer } from "react-toastify";
import Style from "./addproduct.module.css";

if (typeof window !== "undefined") {
  injectStyle();
}

function EditProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data: loginData } = useSelector((state) => state.login);
  const token = loginData?.data?.token;

  const [success, setSuccess] = useState(false)

  useEffect(() => {
    dispatch(getProductByIDWithAuth(id, token));
    if (success === true) {
      toast.success("Produk berhasil diUpdate", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [success]);

  const {
    isLoading,
    data: productByIdData,
    error,
  } = useSelector((state) => state.product_by_id);

  const validationSchema = yup.object({
    nama: yup
      .string()
      .required("Name is Required!")
      .max(25, "Nama terlalu panjang"),
    harga: yup.number().required("Harga is Required!"),
    deskripsi: yup
      .string()
      .min(30, "Deskripsi terlalu pendek")
      .max(1000, "Deskripsi terlalu panjang")
      .required("Deskripsi is Required!"),
    category_id: yup.number().min(1, "Pilih kategori").required("Pilih kategori")
  });

  const handleSubmitProduct = (values) => {
    dispatch(editProductSeller(token, values, id, setSuccess));
  };

  console.log(productByIdData?.data);
  return (
    <div className="mt-3">
      <ToastContainer />
      <div
        className={`justify-content-center align-items-center mb-3 ${Style["title-responsive"]}`}
      >
        <button
          type="button"
          className={`${Style["width-left"]} bg-transparent btn`}
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-arrow-left fs-4" />
        </button>
        <p className="m-0 ms-3 fs-6">Lengkapi Detail Produk</p>
      </div>
      <div
        className={`d-flex mt-3 position-absolute start-50 translate-middle-x ${Style.responsive}`}
      >
        <button
          type="button"
          className={`${Style["width-left"]} bg-transparent btn d-none d-md-block d-lg-block d-xl-block d-xxl-block`}
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-arrow-left fs-4" />
        </button>
        <div className={`${Style["width-right"]} w-100`}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              nama: productByIdData?.data?.nama,
              deskripsi: productByIdData?.data?.deskripsi,
              harga: productByIdData?.data?.harga,
              category_id: 0
            }}
            onSubmit={(values, { resetForm }) => {
              handleSubmitProduct(values);
              resetForm(" ");
            }}
          >
            {({ errors, values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nama Produk</label>
                  <input
                    type="text"
                    name="nama"
                    className="form-control"
                    placeholder={productByIdData?.data?.nama}
                    onChange={handleChange}
                    value={values.nama}
                  />
                  <span className="font-12 text-danger py-1">
                    {errors.nama}
                  </span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Harga Produk</label>
                  <input
                    type="number"
                    name="harga"
                    className="form-control"
                    placeholder="Harga Produk"
                    onChange={handleChange}
                    value={values.harga}
                  />
                  <span className="font-12 text-danger py-1">
                    {errors.harga}
                  </span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Kategori</label>
                  <select
                    className="form-select"
                    name="category_id"
                    placeholder="pilih kategori"
                    onChange={handleChange}
                    value={values.category_id}
                    defaultValue={0}
                  >
                    <option value={0}>{productByIdData?.data?.category?.nama}</option>
                    <option value={1}>Kaos & Kemeja</option>
                    <option value={2}>Celana</option>
                    <option value={3}>Jakcet & Hodie</option>
                    <option value={4}>Sepatu & Sandal</option>
                    <option value={5}>Accessories</option>
                  </select>
                  <span className="font-12 text-danger py-1">
                    {errors.category_id}
                  </span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Deskripsi</label>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      style={{ height: "5rem" }}
                      name="deskripsi"
                      onChange={handleChange}
                      value={values.deskripsi}
                    />
                    <span className="font-12 text-danger py-1">
                      {errors.deskripsi}
                    </span>
                  </div>
                </div>
                <div className="d-flex mt-5 mb-5">
                  <button
                    type="submit"
                    className="button-primary-1 w-100 ms-2 fs-6"
                  >
                    Update
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
