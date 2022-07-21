/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CloseButton from "react-bootstrap/CloseButton";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import { postProfileAction } from "store/action/profileAction";
import { getUserProfile } from "../store/action/profileAction";
import Style from "./seller/ProductList/sellersemuaproduk.module.css";

if (typeof window !== "undefined") {
  injectStyle();
}

function InfoProfil() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const { data: dataLogin } = useSelector((state) => state.login);
  const {
    isLoading,
    data: dataProfile,
    error,
  } = useSelector((state) => state.profile);

  const [successHandler, setSuccessHandler] = useState();

  const [file, setFile] = useState(dataProfile.data.avatar);
  const [token, setToken] = useState(dataLogin?.data?.token);
  const [imageUpload, setImageUpload] = useState();
  const [errMsg, setErrMsg] = useState(false);

  const validationSchema = yup.object({
    kota: yup.string().required("Pilih Kota"),
    no_hp: yup.string().max(12, "Maksimal 12 angka").required("Isi no hp anda"),
    alamat: yup
      .string()
      .max(200, "Alamat terlalu panjang")
      .required("Isi alamat anda"),
  });

  const handleOpenFileInput = () => {
    inputRef.current.click();
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(URL.createObjectURL(event.target.files[0]));
      setImageUpload(event.target.files[0]);
      setErrMsg(false);
    }
  };

  const onImageDelete = () => {
    setFile(dataProfile.data.avatar || "/images/camera1.png");
    setErrMsg(true);
  };

  const msg = () => {
    if (imageUpload === undefined) {
      setErrMsg(true);
    }
  };
  const handleSubmitProfil = (values) => {
    const formData = new FormData();
    formData.append("kota", values.kota);
    formData.append("alamat", values.alamat);
    formData.append("no_hp", values.no_hp);
    formData.append("image", imageUpload);
    // eslint-disable-next-line no-param-reassign
    values.image = imageUpload;
    if (errMsg === false) {
      dispatch(postProfileAction(token, formData, setSuccessHandler));
    }
    // console.log(imageUpload)
  };

  useEffect(() => {
    dispatch(getUserProfile(token));

    if (successHandler === true) {
      toast.success("Profile berhasil disimpan", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [successHandler]);

  const array = [
    "Kota Banda Aceh",
    "Kota Sabang",
    "Kota Subulussalam",
    "Kota Medan",
    "Kota Tanjung Balai",
    "Kota Binjai",
    "Kota Tebing Tinggi",
    "Kota Padang Sidempuan",
    "Kota Padang",
    "Kota Padang Panjang",
    "Kota Bukittinggi",
    "Kota Pekan Baru",
    "Kota Dumai",
    "Kota Jambi",
    "Kota Sungai Penuh",
    "Kota Palembang",
    "Kota Bengkulu",
    "Kota Bandar Lampung",
    "Kota Metro",
    "Kota Pangkal Pinang",
    "Kota Batam",
    "Kota Tanjung Pinang",
    "Kota Jakarta Timur",
    "Kota Jakarta Selatan",
    "Kota Jakarta Barat",
    "Kota Jakarta Utara",
    "Kota Jakarta Pusat",
    "Kota Bandung",
    "Kota Banjar",
    "Kota Tasikmalaya",
    "Kota Cimahi",
    "Kota Depok",
    "Kota Bekasi",
    "Kota Cirebon",
    "Kota Sukabumi",
    "Kota Bogor",
    "Kota Semarang",
    "Kota Tegal",
    "Kota Pekalongan",
    "Kota Salatiga",
    "Kota Surakarta",
    "Kota Magelang",
    "Kota Yogyakarta",
    "Kota Surabaya",
    "Kota Batu",
    "Kota Madiun",
    "Kota Mojokerto",
    "Kota Pasuruan",
    "Kota Probolinggo",
    "Kota Malang",
    "Kota Blitar",
    "Kota Kediri",
  ];

  return (
    <div>
      <ToastContainer />
      <div className="container d-flex justify-content-center">
        <div className="d-flex w-max-570 mt-5 w-100 position-relative">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn position-absolute"
            style={{ left: "-4.375rem", top: "-20px" }}
          >
            <i className="bi bi-arrow-left fs-4" />
          </button>
          <div className="w-100">
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                kota: "",
                alamat: "",
                no_hp: "",
                image: null,
              }}
              onSubmit={(values) => {
                handleSubmitProfil(values);
              }}
            >
              {({ errors, values, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-center">
                    <div style={{ maxWidth: "8rem" }}>
                      <div
                        className={`${Style.color} card d-flex justify-content-center align-items-center position-relative`}
                        style={{ width: "8rem" }}
                      >
                        <input
                          type="file"
                          name="image"
                          accept="image/*"
                          ref={inputRef}
                          className="d-none"
                          onChange={(e) => onImageChange(e)}
                        />
                        <img
                          src={file}
                          alt="img-uploud"
                          onClick={handleOpenFileInput}
                          aria-hidden="true"
                          className="bg-purple-1 rounded-3 shadow"
                          style={{
                            width: "132px",
                            height: "132px",
                            objectFit: "cover",
                          }}
                        />
                        <CloseButton
                          style={{ top: "-10px", right: "-10px", zIndex: 10 }}
                          className="position-absolute rounded-circle bg-secondary p-1"
                          onClick={onImageDelete}
                        />
                      </div>
                      {errMsg && (
                        <span className="font-12 text-danger py-1">
                          Pilih Gambar
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Nama*</label>
                    <input
                      type="text"
                      disabled
                      className="form-control rounded-3"
                      placeholder={dataProfile?.data?.nama || "Nama"}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Kota*</label>
                    <select
                      className="form-select"
                      name="kota"
                      aria-label="Default select example"
                      onChange={handleChange}
                    >
                      <option selected disabled>
                        {dataProfile?.data?.kota || "Pilih Kota"}
                      </option>
                      {array.map((option) => (
                        <option value={option}>{option}</option>
                      ))}
                    </select>
                    <span className="font-12 text-danger py-1">
                      {errors.kota}
                    </span>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Alamat*</label>
                    <textarea
                      className="form-control rounded-3"
                      name="alamat"
                      onChange={handleChange}
                      placeholder={
                        dataProfile?.data?.alamat ||
                        "contoh: jl. Jambangan no. 5"
                      }
                      style={{ height: "5rem" }}
                    />
                    <span className="font-12 text-danger py-1">
                      {errors.alamat}
                    </span>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">No Handphone*</label>
                    <input
                      type="text"
                      name="no_hp"
                      onChange={handleChange}
                      value={values.no_hp}
                      className="form-control rounded-3"
                      placeholder={
                        dataProfile?.data?.no_hp || "Contoh: +628123456789"
                      }
                    />
                    <span className="font-12 text-danger py-1">
                      {errors.no_hp}
                    </span>
                  </div>
                  <div className="d-flex mt-5 mb-5">
                    <button
                      type="submit"
                      className="button-primary-1 w-100"
                      onClick={msg}
                    >
                      Simpan
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProfil;
