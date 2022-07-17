/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
/* eslint-disable no-param-reassign */
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

function AddProduct() {
  const navigate = useNavigate();

  const { isLoading, data: loginData } = useSelector((state) => state.login);
  let token = loginData?.data?.token;

  const [imagePrev, setImagePrev] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [msgErr, setmsgErr] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const [myOption, setMyOption] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [style, setStyle] = useState({});
  const [closed, setClosed] = useState(true);

  const [disable, setDisable] = useState(true);

  const validationSchema = yup.object({
    nama: yup.string().required("Name is Required!"),
    harga: yup.number().required("Harga is Required!"),
    deskripsi: yup
      .string()
      // .min(30, "Deskripsi terlalu pendek")
      .max(500, "Deskripsi terlalu panjang")
      .required("Deskripsi is Required!"),
    category_id: yup.number().min(1, "pilih kategori").required("Required!"),
  });

  console.log(imagePrev);

  const handleSubmitProduct = (values) => {
    const formData = new FormData();
    formData.append("nama", values.nama);
    formData.append("harga", values.harga);
    formData.append("deskripsi", values.deskripsi);
    imagePrev.forEach((image) => {
      formData.append("image", image);
    });
    formData.append("category_id", values.category_id);

    if (values.image === undefined) {
      setIsSubmit(true);
      setmsgErr("Pilih Gambar");
    }
    if (values.image.length > 4) {
      setIsSubmit(true);
      setmsgErr("Maksimal upload gambar 4");
    } else {
      setIsSubmit(false);
      AxiosWithAuth(token)
        .post("/product/add-product", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 201) {
            setSuccess("Produk berhasil diterbitkan.");
            setTimeout(() => navigate("/product/list"), 5000);
          }
          console.log("post success: ", res);
        })
        .catch((err) => {
          console.log("err: ", err);
          if (err.response.status === 400) {
            setError("Batas upload produk adalah 4");
            setTimeout(() => {
              navigate("/product/list");
            }, 5000);
            setTimeout(() => {
              const newStyle = {
                opacity: 1,
                width: `${100}%`,
              };
              setStyle(newStyle);
            }, 100);
          }
        });
    }
  };
  const handleImagePrev = (e) => {
    const newFiles = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < e.target.files.length; i++) {
      newFiles.push(e.target.files[i]);
    }
    setImagePrev(newFiles);
    // setImagePrev(e.target.files);
    const file = e.target.files;
    const filesArray = Array.from(file);
    setImagePreview(filesArray);
    if (e !== undefined) {
      setIsSubmit(false);
    }
  };

  console.log(imagePrev, "imagePreview");
  return (
    <div className="mt-3">
      {error && closed && (
        <div className="">
          <div
            className="fixed-top"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="row mb-0">
              <div className="col-12">
                <div
                  className={`${Style["responsive-alert"]} rounded-top d-flex justify-content-between ps-3 pe-3 pt-3 pb-3 align-items-center`}
                >
                  <p className="m-0 fs-6 " style={{ color: "#842029" }}>
                    Batas upload produk adalah 4
                  </p>
                  <i
                    className="bi bi-x fs-2 ms-2"
                    style={{ color: "#842029", cursor: "pointer" }}
                    onClick={() => setClosed(navigate("/product/list"))}
                  ></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className={`${Style["progress"]}`}>
                  <div
                    className={`${Style["progress-done"]}`}
                    style={style}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {success && closed && (
        <div className="">
          <div
            className="fixed-top"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="row mb-0">
              <div className="col-12">
                <div
                  className={`${Style["responsive-alert-success"]} rounded-top d-flex justify-content-between ps-3 pe-3 pt-3 pb-3 align-items-center`}
                >
                  <p className="m-0 fs-6 text-white">
                    Batas upload produk adalah 4
                  </p>
                  <i
                    className="bi bi-x fs-2 ms-2 text-white"
                    onClick={() => setClosed(navigate("/product/list"))}
                  ></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className={`${Style["progress"]}`}>
                  <div
                    className={`${Style["progress-done"]}`}
                    style={style}
                  ></div>
                </div>
              </div>
            </div>
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
            onSubmit={(values) => {
              handleSubmitProduct(values);
            }}
          >
            {({
              errors,
              values,
              setFieldValue,
              handleChange,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
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
                    className="form-select"
                    name="category_id"
                    placeholder="pilih kategori"
                    onChange={handleChange}
                    value={values.category_id}
                    defaultValue={0}
                  >
                    <option value={0}>Pilih Kategori</option>
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
                    <label>Deskripsi</label>
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
                      multiple
                      onChange={(e) => {
                        // setFieldValue("image", e.target.files[0]);
                        handleImagePrev(e);
                      }}
                      onClick={() => {
                        if (values.image === null) {
                          setDisable(true);
                          setIsSubmit(true);
                        } else {
                          setDisable(false);
                          setIsSubmit(false);
                        }
                      }}
                    />
                  </div>
                  <span className="font-12 text-danger py-1">
                    {errors.image}
                  </span>
                  {isSubmit && (
                    <span className="font-12 text-danger py-1">{msgErr}</span>
                  )}
                  <span className="font-12 text-danger py-1"></span>
                  {myOption === "show" && (
                    // <div className="mt-3">
                    //   <ImagePreview file={imagePrev} />
                    // </div>
                    <div className="mb-3 d-flex flex-wrap">
                      {imagePreview &&
                        imagePreview.map((image) => {
                          return (
                            <div className="pe-3 mt-3">
                              <div key={image} className="image grid">
                                <ImagePreview file={image} />
                              </div>
                            </div>
                          );
                        })}
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