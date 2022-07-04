import axios from "axios";
import React from "react";
import { useState } from "react";
import Style from "./sellersemuaproduk.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AxiosWithAuth } from "../../utils/axiosWithAuth";

function AddProduct() {
  const { isLoading, data: loginData } = useSelector((state) => state.login);

  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [myOption, setMyOption] = useState("");

  let token = loginData?.data?.token;

  const handleSubmit = () => {
    console.log("nama: ", nama);
    console.log("harga: ", harga);
    console.log("deskripsi: ", deskripsi);
    console.log("image: ", image);

    const data = new FormData();
    data.append("nama", nama);
    data.append("harga", harga);
    data.append("deskripsi", deskripsi);
    data.append("image", image);

    AxiosWithAuth(token)
      .post("/product/add", data, {
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
    const file = e.target.files[0];
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
          <form>
            <div className="mb-3">
              <label className="form-label">Nama Produk</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nama Produk"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <span className="font-12 text-danger py-1"></span>
            </div>
            <div className="mb-3">
              <label className="form-label">Harga Produk</label>
              <input
                type="number"
                name="harga"
                className="form-control"
                placeholder="Harga Produk"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
              <span className="font-12 text-danger py-1"></span>
            </div>
            <div className="mb-3">
              <label className="form-label">Kategori</label>
              <select class="form-select" aria-label="Default select example">
                <option selected disabled>
                  Pilih Kategori
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Deskripsi</label>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ height: "5rem" }}
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                />
                <label for="floatingTextarea">Deskripsi</label>
                <span className="font-12 text-danger py-1"></span>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Foto Produk</label>
              {myOption === "show" && (
                <div className="mb-3">
                  <img src={imagePrev} alt="" style={{ maxWidth: "340px" }} />
                </div>
              )}
              <div
                className="card-dot d-flex justify-content-center align-items-center"
                style={{ maxWidth: "7rem" }}
              >
                <input
                  type="file"
                  onChange={(e) => handleImagePrev(e)}
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
