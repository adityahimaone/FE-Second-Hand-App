import axios from "axios";
import React from "react";
import { useState } from "react";
import Style from "./sellersemuaproduk.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AxiosWithAuth } from "../../utils/axiosWithAuth";
import { Formik, Form } from "formik";
import * as yup from "yup";

function AddProduct() {
  const { isLoading, data: loginData } = useSelector((state) => state.login);
  let token = loginData?.data?.token;

  // const [kategori, setKategori] = useState("");
  // const [harga, setHarga] = useState("");
  // const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [myOption, setMyOption] = useState("");

  let schema = yup.object().shape({
    nama: yup.string().required("nama harus di isi"),
    harga: yup.string().required("harga Harus di isi"),
    deskripsi: yup.string().required("deskripsi Harus di isi"),
    kategori: yup.string().required("pilih kategori"),
    // image: yup.mixed().required("pillih gambar"),
  });

  const handleSubmit = (values) => {
    console.log(values);

    // const data = new FormData(schema);
    AxiosWithAuth(token)
      .post("/product/add-product", values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("post success: ", res);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  const handleImagePrev = (e) => {
    const file = e.currentTarget.files[0];
    setImage(file);
    setImagePrev(URL.createObjectURL(file));

  };
  return (
    <div className="mt-3">
      <div className="d-flex mt-3 w-50 position-absolute start-50 translate-middle-x">
        <div className={`${Style["width-left"]}`}>
          <img src="/images/fi_arrow-left.png" alt="" />
        </div>
        <div className={`${Style["width-right"]} w-100`}>
          <Formik
            validationSchema={schema}
            initialValues={{
              nama: "",
              deskripsi: "",
              harga: "",
              kategori: "",
              // image: null,
            }}
            onSubmit={(values) => {
              console.log(values);
              handleSubmit(values);
            }}
          >
            {({ handleSubmit, errors, handleChange, values }) => (
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
                    class="form-select"
                    name="kategori"
                    placeholder="pilih kategori"
                    onChange={handleChange}
                    value={values.kategori}
                  >
                    <option value="" selected disabled>
                      Pilih Kategori
                    </option>
                    <option value="Kemeja">Kemeja</option>
                    <option value="Celana">Celana</option>
                    <option value="Kaos">Kaos</option>
                  </select>
                  <span className="font-12 text-danger py-1">
                    {errors.kategori}
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
                  {myOption === "show" && (
                    <div className="mb-3">
                      <img
                        src={imagePrev}
                        alt=""
                        style={{ maxWidth: "340px" }}
                      />
                    </div>
                  )}
                  <div
                    className="card-dot d-flex justify-content-center align-items-center"
                    style={{ maxWidth: "7rem" }}
                  >
                    <input
                      type="file"
                      onChange={(e) => {handleImagePrev(e)}}
                      className={`${Style["custom-file-input"]} ms-4 `}
                    />
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <button
                    type="button"
                    className={`${Style["button-primary-3"]} w-50 me-2`}
                    onClick={() => setMyOption("show")}
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="button-primary-1 w-50 ms-2"
                    onClick={handleSubmit}
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
