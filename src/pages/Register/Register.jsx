import React, { useState, useEffect } from "react";
// import loginimg from "../../assets/image/loginimg.png";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import dataCity from "utils/data-city";
import { postRegister } from "../../store/action/registerAction";
import Alert from "../../components/UI/Alert/Alert";
import Style from "./Register.module.css";

function Register() {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    nama: "",
    email: "",
    password: "",
    alamat: "",
    kota: "",
    no_hp: "",
    role: "",
  });

  const [showPasword, setShowPasword] = useState(false);
  const [errorRegister, setErrorRegister] = useState("");

  const handleClickShowPassword = () => {
    setShowPasword((prev) => !prev);
  };

  const schema = yup.object().shape({
    nama: yup.string().required("Nama haruw di isi"),
    email: yup.string().email().required("Email harus di isi"),
    password: yup
      .string()
      .required("Password Harus di isi")
      .min(8, "Should more than 8 characters")
      .matches(/[a-z]/g, "Should contain at least 1 lowercase")
      .matches(/[A-Z]/g, "Should contain at least 1 uppercase")
      .matches(/[0-9]/g, "Should contain at least 1 number")
      .matches(/[!@#$%^&*]/g, "Should contain at least 1 special character")
      .matches(/^\S*$/, "Should not contain spaces"),
    alamat: yup.string().required(),
    kota: yup.string().required(),
    no_hp: yup
      .string()
      .required("cantumkan Nomor telepon")
      .min(12, "Should more than 12 characters")
      .matches(/[0-9]/g, "Should contain at least 1 number"),
  });

  const handleSubmitRegister = async (values) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://old-but-new.herokuapp.com/api/v1/auth/register",
        data: values,
      });

      if (res.status === 201) {
        // localStorage.setItem("role", "buyer", "token", res.data.access_token);
        navigate("/login", { replace: true });
      }

      if (res.status === 201) {
        // localStorage.setItem("role", "seller", "token", res.data.access_token);
        navigate("/", { replace: true });
        // console.log(res.data.email);
      }
    } catch (error) {
      console.log(error);
      setErrorRegister(error.response.data.message);
    }
  };

  console.log(errorRegister);

  const dispatch = useDispatch();
  const { isLoading, data: register } = useSelector((state) => state.register);

  return (
    <div className="container-fluid">
      <div className={`row ${Style["container-register"]}`}>
        <div
          className={`col-xss-6 d-none d-xss-block ${Style["register-bg"]}`}
        />
        <div className="col-xss-6 col-12 d-flex justify-content-center mt-2 mt-xss-0 align-items-start align-items-xss-center position-relative">
          <Formik
            validationSchema={schema}
            initialValues={{
              nama: "",
              email: "",
              password: "",
              alamat: "",
              kota: "",
              no_hp: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              handleSubmitRegister(values);
            }}
          >
            {({ handleSubmit, errors, handleChange }) => (
              <Form
                onSubmit={handleSubmit}
                className="col-10 col-sm-7 d-flex flex-column my-1"
              >
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="button-icon bg-white rounded-circle d-block d-xss-none"
                  style={{ top: "10px", left: "5px" }}
                >
                  <i className="bi bi-arrow-left fs-4" />
                </button>
                <h1 className="fw-bold mt-5 mt-xss-0">Daftar</h1>
                <div>
                  <p>Nama</p>
                  <input
                    className="form-input w-100"
                    style={{ marginButtom: "1rem" }}
                    placeholder="Contoh: toni"
                    // value={registerData.nama}
                    name="nama"
                    onChange={handleChange}
                  />
                  <span className="font-12 text-danger py-1">
                    {errors.nama}
                  </span>
                </div>
                <div>
                  <p>No HP</p>
                  <input
                    className="form-input w-100"
                    required
                    style={{ marginButtom: "1rem" }}
                    placeholder="Contoh: 081xxxxx"
                    type="number"
                    // value={registerData.no_hp}
                    name="no_hp"
                    onChange={handleChange}
                  />
                  <span className="font-12 text-danger py-1">
                    {errors.no_hp}
                  </span>
                </div>
                <div>
                  <p>Kota</p>
                  <select
                    className="form-input w-100"
                    required
                    style={{ marginButtom: "1rem" }}
                    // value={registerData.kota}
                    name="kota"
                    onChange={handleChange}
                  >
                    <option value="">Pilih Kota</option>
                    {dataCity.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>

                  <span className="font-12 text-danger py-1">
                    {errors.kota}
                  </span>
                </div>
                <div>
                  <p>Alamat</p>
                  <input
                    className="form-input w-100"
                    required
                    style={{ marginButtom: "1rem" }}
                    placeholder="Contoh:desa"
                    // value={registerData.alamat}
                    name="alamat"
                    onChange={handleChange}
                  />
                  <span className="font-12 text-danger py-1">
                    {errors.alamat}
                  </span>
                </div>
                <div>
                  <p>Email</p>
                  <input
                    className="form-input w-100"
                    required
                    style={{ marginButtom: "1rem" }}
                    placeholder="Contoh: johndee@gmail.com"
                    // value={registerData.email}
                    name="email"
                    onChange={handleChange}
                  />
                  <span className="font-12 text-danger py-1">
                    {errors.email}
                  </span>
                </div>
                <div className="position-relative">
                  <p>Password</p>
                  <input
                    className="form-input w-100"
                    style={{ marginButtom: "1rem" }}
                    placeholder="contoh:Rudi@12345678"
                    type={showPasword ? "text" : "password"}
                    // value={registerData.password}
                    name="password"
                    onChange={handleChange}
                  />
                  {showPasword ? (
                    <AiOutlineEyeInvisible
                      className="position-absolute fs-5"
                      style={{ top: "50px", right: "10px" }}
                      onClick={handleClickShowPassword}
                    />
                  ) : (
                    <AiOutlineEye
                      className="position-absolute fs-5"
                      style={{ top: "50px", right: "10px" }}
                      onClick={handleClickShowPassword}
                    />
                  )}
                  <span className="font-12 text-danger py-1">
                    {errors.password}
                  </span>
                </div>
                <button type="submit" className="button-primary-1 w-100 my-4">
                  Daftar
                </button>
                <div className="d-flex text-center d-none d-xss-block">
                  <p clssName="text-center">
                    Sudah punya akun?
                    <Link to="/login">
                      <span className="fw-bold text-decoration-none">
                        &nbsp; Masuk di sini
                      </span>
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="d-flex my-4 justify-content-center align-items-end text-center d-block d-xss-none">
          <span clssName="text-center">Sudah punya akun? </span>{" "}
          <Link to="/login">
            <span className="fw-bold text-decoration-none"> Masuk di sini</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
