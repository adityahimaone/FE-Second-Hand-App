import axios from "axios";
import React from "react";
import { useState } from "react";
import Style from "./sellersemuaproduk.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AxiosWithAuth } from "../../utils/axiosWithAuth";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useRef } from "react";
import ImagePreview from "./ImagePreview";

function AddProduct() {
  const { isLoading, data: loginData } = useSelector((state) => state.login);
  let token = loginData?.data?.token;

  // const [kategori, setKategori] = useState("");
  // const [name, setName] = useState("");
  // const [harga, setHarga] = useState("");
  // const [deskripsi, setDeskripsi] = useState("");
  // const [image, setImage] = useState("");
  // const [imagePrev, setImagePrev] = useState("");
  const [myOption, setMyOption] = useState("");

  // let schema = yup.object().shape({
  //   nama: yup.string().required("nama harus di isi"),
  //   harga: yup.number().required("harga Harus di isi"),
  //   deskripsi: yup.string().required("deskripsi Harus di isi"),
  //   category_id: yup.number().required("pilih kategori"),
  //   // image: yup.mixed().required("pillih gambar"),
  // });

  const handleSubmit = (values) => {
    console.log(values);

    // const data = new FormData(schema);
    //   AxiosWithAuth(token)
    //     .post("/product/add-product", values, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((res) => {
    //       console.log("post success: ", res);
    //     })
    //     .catch((err) => {
    //       console.log("err: ", err);
    //     });
  };

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
        "ukuran terlalu besar, max 2 mb",
        (value) => value && value.size < 2e6
      )
      .test(
        "FILE_TYPE",
        "Tipe file hanya berupa jpg, jpeg, png",
        (value) =>
          value && ["image/png", "image/jpg", "image/jpeg"].includes(value.type)
      ),
  });

  // const handleImagePrev = (e) => {
  //   const file = e.currentTarget.files[0];
  //   image(file);
  //   setImagePrev(URL.createObjectURL(file));
  // };

  // const previewImage = ({ file }) => {
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       setImagePrev(reader.result);
  //     };
  //     return (
  //       <div>
  //         <img src={imagePrev} alt="" style={{ width: "300px" }} />
  //       </div>
  //     );
  //   }
  // };
  // const handleImageChange = (e) => {
  //   if (e.target.files) {
  //     const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
  //     console.log("files Array : ", filesArray)
  //   }
  // }
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
                    <option value={1}>Kemeja</option>
                    <option value={2}>Celana</option>
                    <option value={3}>Kaos</option>
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
                    />
                  </div>
                  <span className="font-12 text-danger py-1">
                    {errors.image}
                  </span>
                  {myOption === "show" && values.image  && (
                    <div className="mt-3">
                      <ImagePreview file={values.image}/>
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
                  <button
                    type="submit"
                    className="button-primary-1 w-50 ms-2"
                    // onClick={handleSubmit}
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

/* eslint-disable react-hooks/rules-of-hooks */
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Style from "./sellersemuaproduk.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import { AxiosWithAuth } from "../../utils/axiosWithAuth";

// function AddProduct() {
//   const { isLoading, data: loginData } = useSelector((state) => state.login);
//   let token = loginData?.data?.token;

//   const [nama, setNama] = useState("");
//   const [harga, setHarga] = useState("");
//   const [deskripsi, setDeskripsi] = useState("");
//   const [category_id, setCategory_id] = useState("");
//   const [image, setImage] = useState("");
//   const [imagePrev, setImagePrev] = useState("");
//   const [myOption, setMyOption] = useState("");
//   const [error, setError] = useState(false)

//   const handleSubmit = () => {
//     console.log("nama: ", nama);
//     console.log("harga: ", harga);
//     console.log("deskripsi: ", deskripsi);
//     console.log("category_id: ", category_id);
//     console.log("image: ", image);

//     if (nama.length==0||harga.length===0||deskripsi.length==0||category_id===0||image===null) {
//       setError(true)
//     }

//     const data = new FormData();
//     data.append("nama", nama);
//     data.append("harga", harga);
//     data.append("deskripsi", deskripsi);
//     data.append("category_id", category_id);
//     data.append("image", image);

//     AxiosWithAuth(token)
//       .post("/product/add-product", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         console.log("post success: ", res);
//       })
//       .catch((err) => {
//         console.log("err: ", err);
//       });
//   };

//   const handleImagePrev = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setImagePrev(URL.createObjectURL(file));
//   };
//   return (
//     <div className="mt-3">
//       <div className="d-flex mt-3 w-50 position-absolute start-50 translate-middle-x">
//         <div className={`${Style["width-left"]}`}>
//           <img src="/images/fi_arrow-left.png" alt="" />
//         </div>
//         <div className={`${Style["width-right"]} w-100`}>
//           <form>
//             <div className="mb-3">
//               <label className="form-label">Nama Produk</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 placeholder="Nama Produk"
//                 value={nama}
//                 onChange={(e) => setNama(e.target.value)}
//               />
//               {error&&nama.length<=0?
//               <span className="font-12 text-danger py-1">Nama product tidak boleh kosong</span>:""}
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Harga Produk</label>
//               <input
//                 type="number"
//                 name="harga"
//                 className="form-control"
//                 placeholder="Harga Produk"
//                 value={harga}
//                 onChange={(e) => setHarga(e.target.value)}
//               />{error&&harga.length<=0?
//               <span className="font-12 text-danger py-1">Harga product tidak boleh kosong</span>:""}
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Kategori</label>
//               <select class="form-select" aria-label="Default select example" nama="category_id" value={category_id} onChange={(e) => setCategory_id(e.target.value)}>
//                 <option value={0} selected>
//                   Pilih Kategori
//                 </option>
//                 <option value={1}>One</option>
//                 <option value={2}>Two</option>
//                 <option value={3}>Three</option>
//               </select>
//               {error&&category_id==0?
//               <span className="font-12 text-danger py-1">Kategori product tidak boleh kosong</span>:""}
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Deskripsi</label>
//               <div className="form-floating">
//                 <textarea
//                   className="form-control"
//                   placeholder="Leave a comment here"
//                   id="floatingTextarea"
//                   style={{ height: "5rem" }}
//                   value={deskripsi}
//                   onChange={(e) => setDeskripsi(e.target.value)}
//                 />
//                 <label for="floatingTextarea">Deskripsi</label>
//                 {error&&deskripsi.length<=0?
//                 <span className="font-12 text-danger py-1">Deskripsi product tidak boleh kosong</span>:""}
//               </div>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Foto Produk</label>
//               {myOption === "show" && (
//                 <div className="mb-3">
//                   <img src={imagePrev} alt="" style={{ maxWidth: "340px" }} />
//                 </div>
//               )}
//               <div
//                 className="card-dot d-flex justify-content-center align-items-center"
//                 style={{ maxWidth: "7rem" }}
//               >
//                 <input
//                   type="file"
//                   onChange={(e) => handleImagePrev(e)}
//                   className={`${Style["custom-file-input"]} ms-4 `}
//                 />
//               </div>
//                 {error&&image===null?
//                 <span className="font-12 text-danger py-1">Deskripsi product tidak boleh kosong</span>:""}
//             </div>
//             <div className="d-flex mt-5">
//               <button
//                 type="button"
//                 className={`${Style["button-primary-3"]} w-50 me-2`}
//                 onClick={() => setMyOption("show")}
//               >
//                 Preview
//               </button>
//               <button
//                 type="button"
//                 className="button-primary-1 w-50 ms-2"
//                 onClick={handleSubmit}
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddProduct;
