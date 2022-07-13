/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Style from "./seller/sellersemuaproduk.module.css";
import { getUserProfile } from "../store/action/profileAction";

function InfoProfil() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: dataLogin } = useSelector((state) => state.login);
  const {
    isLoading,
    data: dataProfile,
    error,
  } = useSelector((state) => state.profile);

  const [token, setToken] = useState(dataLogin?.data?.token);

  useEffect(() => {
    dispatch(getUserProfile(token));
  }, []);

  console.log(dataProfile.data, "dataProfile");

  return (
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
          <form>
            <div className="d-flex justify-content-center">
              <div style={{ maxWidth: "8rem" }}>
                <div
                  className={`${Style.color} card d-flex justify-content-center align-items-center`}
                  style={{ width: "8rem" }}
                >
                  <input
                    type="file"
                    className={`${Style["custom-file-input"]} ${Style["input-opacity"]} position-absolute`}
                  />
                  <img
                    src="/images/fi_camera.svg"
                    alt=""
                    srcSet=""
                    className="mt-5 mb-5"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Nama*</label>
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="Nama"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Kota*</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Pilih Kota
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Alamat*</label>
              <div className="form-floating">
                <textarea
                  className="form-control rounded-3"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ height: "5rem" }}
                />
                <label htmlFor="floatingTextarea">
                  Contoh: Jalan Ikan Hiu 33
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">No Handphone*</label>
              <input
                type="number"
                className="form-control rounded-3"
                placeholder="Contoh: +628123456789"
              />
            </div>
            <div className="d-flex mt-5 mb-5">
              <button type="submit" className="button-primary-1 w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InfoProfil;
