/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// /* eslint-disable react/jsx-no-duplicate-props */
// /* eslint-disable jsx-a11y/control-has-associated-label */
// /* eslint-disable arrow-body-style */
// /* eslint-disable react/button-has-type */
// /* eslint-disable no-param-reassign */
// /* eslint-disable dot-notation */
// /* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable jsx-a11y/no-static-element-interactions */
// /* eslint-disable react/self-closing-comp */
// /* eslint-disable prefer-const */
// /* eslint-disable import/order */
// /* eslint-disable import/no-duplicates */
// /* eslint-disable react/no-unknown-property */
// /* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { postAddProductSeller } from "store/action/ProductSellerAction";
import ImagePreview from "./ImagePreview";
import Style from "./addproduct.module.css";

function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: loginData } = useSelector((state) => state.login);
  const token = loginData?.data?.token;

  const [imagePrev, setImagePrev] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [msgErr, setmsgErr] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const [errorValidation, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [style, setStyle] = useState({});
  const [closed, setClosed] = useState(true);
  const [disable, setDisable] = useState(true);

  const [errorHandler, setErrorHandler] = useState();
  const [successHandler, setSuccessHandler] = useState();

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
    category_id: yup.number().min(1, "pilih kategori").required("Required!"),
  });

  const handleSubmitProduct = (values) => {
    const formData = new FormData();
    formData.append("nama", values.nama);
    formData.append("harga", values.harga);
    formData.append("deskripsi", values.deskripsi);
    imagePrev.forEach((image) => {
      formData.append("image", image);
    });
    formData.append("category_id", values.category_id);

    if (imagePrev.length === 0) {
      setIsSubmit(true);
      setmsgErr("Pilih Gambar");
    }
    if (imagePrev.length !== 0) {
      if (imagePrev.length > 4) {
        setIsSubmit(true);
        setmsgErr("Maksimal upload gambar 4");
      }
      if (imagePrev.length <= 4) {
        setIsSubmit(false);
        dispatch(
          postAddProductSeller(
            token,
            formData,
            setErrorHandler,
            setSuccessHandler
          )
        );
        console.log(imagePrev)
      }
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
    e.target.value = ""
  };

  // delete handle
  const onImageDelete = (image) => {
    setImagePrev(imagePrev.filter((e) => e !== image))
    setImagePreview(imagePreview.filter((e) => e !== image))
    URL.revokeObjectURL(image)
  };

  // Error Handling
  useEffect(() => {
    if (successHandler === true) {
      setSuccess("Produk berhasil diterbitkan.");
      setTimeout(() => navigate("/product/list"), 5000);
      setTimeout(() => {
        const newStyle = {
          opacity: 1,
          width: `${100}%`,
        };
        setStyle(newStyle);
      }, 100);
    }
    if (errorHandler === true) {
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
  }, [successHandler, errorHandler]);

  return (
    <div className="mt-3">
      {errorValidation && closed && (
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
                   />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className={`${Style.progress}`}>
                  <div
                    className={`${Style["progress-done-error"]}`}
                    style={style}
                   />
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
                    Produk telah berhasil ditambahkan
                  </p>
                  <i
                    className="bi bi-x fs-2 ms-2 text-white"
                    onClick={() => setClosed(navigate("/product/list"))}
                   />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className={`${Style.progress}`}>
                  <div
                    className={`${Style["progress-done-success"]}`}
                    style={style}
                   />
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
        className={`d-flex mt-3 position-absolute start-50 translate-middle-x ${Style.responsive}`}
      >
        <div className={`${Style["width-left"]}`} onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left fs-4" />
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
            {({ errors, values, handleChange, handleSubmit }) => (
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
                <div className="mb-0">
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
                  <span className="font-12 text-danger py-1" />
                    <div className="mb-3 d-flex flex-wrap">
                      {imagePreview &&
                        imagePreview.map((image) => (
                            <div className="pe-3 mt-0">
                              <div key={image} className="img-thumbnail grid">
                                <ImagePreview file={image} />
                              </div>
                              <button type="button" className="btn btn-warning mt-2" onClick={() => onImageDelete(image)}>delete</button>
                            </div>
                          ))}
                    </div>
                </div>
                <div className="d-flex mt-5 mb-5">
                  <button
                    type="button"
                    className={`${Style["button-primary-3"]} w-50 me-2 fs-6`}
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
