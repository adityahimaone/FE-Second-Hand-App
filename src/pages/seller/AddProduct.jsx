/* eslint-disable dot-notation */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prefer-const */
/* eslint-disable import/order */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Style from "./addproduct.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AxiosWithAuth } from "../../utils/axiosWithAuth";
import { Formik, Form, replace } from "formik";
import * as yup from "yup";
import ImagePreview from "./ImagePreview";
import { useNavigate } from "react-router-dom";
// import AlertProduct from "./AlertProduct";

function AddProduct() {
  const navigate = useNavigate();

  const { isLoading, data: loginData } = useSelector((state) => state.login);
  let token = loginData?.data?.token;

  const [myOption, setMyOption] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")
  const [closed, setClosed] = useState(true);

  const [disable, setDisable] = useState(true);

  const validationSchema = yup.object({
    nama: yup.string().required("Name is Required!"),
    harga: yup.number().required("Harga is Required!"),
    deskripsi: yup
      .string()
      .min(30, "too small!")
      .max(500, "Too Long String")
      .required("Required"),
    category_id: yup.number().min(1, "pilih kategori").required("Required"),
    image: yup
      .mixed()
      .required("Pilih gambar")
      .test(
        "FILE_SIZE",
        "ukuran file max 2 mb",
        (value) => value && value.size < 2e6
      )
      .test(
        "FILE_TYPE",
        "Tipe file hanya berupa jpg, jpeg, png",
        (value) =>
          value && ["image/png", "image/jpg", "image/jpeg"].includes(value.type)
      ),
  });

  const handleSubmit = (values) => {
    console.log(values);
    // try {
    //   const res = await AxiosWithAuth(token)
    //   .post("/product/add-product", values, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     }
    //   })
    //   if (res.status === 201) {
    //     navigate("/", {replace: true})
    //   }
    // } catch (error) {
    //   console.log("err: ", error);
    // }

    AxiosWithAuth(token)
      .post("/product/add-product", values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("post success: ", res);
        if (res.status === 201) {
          // navigate("/product/list", { replace: true });
          setSuccess("Produk berhasil diterbitkan.")
        }
      })
      .catch((err) => {
        console.log("err: ", err);
        if (err.response.status === 400) {
          setError("Batas upload produk adalah 4");
        }
      });
  };
  return (
    <div className="mt-3">
      {error && closed && (
        <div
          className="w-100 d-flex justify-content-center fixed-top"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            width: "100%",
            height: '100%'
          }}
        >
          <div
            className="alert w-50 d-flex justify-content-between ps-3 pe-3 align-items-center mt-5 ms-4"
            style={{ backgroundColor: "#ffc9cd", height: '4rem'}}
          >
            <p className="m-0 fs-6 " style={{ color: "#842029" }}>
              {error}
            </p>
            <i
              class="bi bi-x fs-2 ms-2"
              style={{ color: "#842029", cursor: 'pointer'}}
              onClick={() => setClosed(navigate("/product/list"))}
            ></i>
          </div>
        </div>
      )}
      {success && closed && (
        <div
          className="w-100 d-flex justify-content-center fixed-top"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            width: "100%",
            height: '100%'
          }}
        >
          <div
            className="alert w-50 d-flex justify-content-between ps-3 pe-3 align-items-center mt-5 ms-4"
            style={{ backgroundColor: "#73CA5C", height: '4rem'}}
          >
            <p className="m-0 fs-6 text-white">
              {success}
            </p>
            <i
              class="bi bi-x fs-2 ms-2 text-white"
              style={{ cursor: 'pointer'}}
              onClick={() => setClosed(navigate("/product/list"))}
            ></i>
          </div>
        </div>
      )}
      <div
        className={`justify-content-center align-items-center mb-3 ${Style["title-responsive"]}`}
      >
        <img src="/images/fi_arrow-left.png" alt="" />
        <p className="m-0 ms-3 fs-6">Lengkapi Detail Produk</p>
      </div>
      <div
        className={`d-flex mt-3 position-absolute start-50 translate-middle-x ${Style["responsive"]}`}
      >
        <div className={`${Style["width-left"]}`}>
          <img src="/images/fi_arrow-left.png" alt="" />
        </div>
        <div className={`${Style["width-right"]} w-100`}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              nama: "",
              deskripsi: "",
              harga: "",
              category_id: 0,
              image: [],
            }}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm({ initialValues: "" });
            }}
          >
            {({ errors, values, setFieldValue, handleChange }) => (
              <Form>
                <div className="mb-3">
                  <label className="form-label">Nama Produk</label>
                  <input
                    type="text"
                    name="nama"
                    className="form-control"
                    placeholder="Nama Produk"
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
                    class="form-select"
                    name="category_id"
                    placeholder="pilih kategori"
                    onChange={handleChange}
                    value={values.category_id}
                  >
                    <option value={0} selected>
                      Pilih Kategori
                    </option>
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
                      id="floatingTextarea"
                      style={{ height: "5rem" }}
                      name="deskripsi"
                      onChange={handleChange}
                      value={values.deskripsi}
                    />
                    <label for="floatingTextarea">Deskripsi</label>
                    <span className="font-12 text-danger py-1">
                      {errors.deskripsi}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Foto Produk</label>
                  <div className="d-flex">
                    <input
                      className={`${Style["custom-file-input"]}`}
                      type="file"
                      name="image"
                      onChange={(e) => {
                        setFieldValue("image", e.target.files[0]);
                      }}
                      onClick={() => {
                        setDisable(false);
                      }}
                    />
                  </div>
                  <span className="font-12 text-danger py-1">
                    {errors.image}
                  </span>
                  {myOption === "show" && (
                    <div className="mt-3">
                      <ImagePreview file={values.image} />
                    </div>
                  )}
                </div>
                <div className="d-flex mt-5 mb-5">
                  <button
                    type="button"
                    disabled={disable}
                    // disabled
                    className={`${Style["button-primary-3"]} w-50 me-2 fs-6`}
                    onClick={() => setMyOption("show")}
                  >
                    Preview
                  </button>
                  <button
                    type="submit"
                    className="button-primary-1 w-50 ms-2 fs-6"
                  >
                    Submit
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

export default AddProduct;
