import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Style from "./sellersemuaproduk.module.css";
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

  const [myOption, setMyOption] = useState("");

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
          navigate("/", {replace: true})
        }
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  return (
    <div className="mt-3">
      <div className="d-flex mt-3 w-50 position-absolute start-50 translate-middle-x">
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
            onSubmit={handleSubmit}
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
                      multiple
                      onChange={(e) => {
                        setFieldValue("image", e.target.files[0]);
                      }}
                    />
                  </div>
                  <span className="font-12 text-danger py-1">
                    {errors.image}
                  </span>
                  {myOption === "show" && values.image && (
                    <div className="mt-3">
                      <ImagePreview file={values.image} />
                    </div>
                  )}
                </div>
                <div className="d-flex mt-5">
                  <button
                    type="button"
                    className={`${Style["button-primary-3"]} w-50 me-2`}
                    onClick={() => setMyOption("show")}
                  >
                    Preview
                  </button>
                  <button type="submit" className="button-primary-1 w-50 ms-2">
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