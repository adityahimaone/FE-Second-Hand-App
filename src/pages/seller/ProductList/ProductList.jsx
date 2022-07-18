import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Style from "./sellersemuaproduk.module.css";
import AllProduct from "./AllProduct";
import ProductOfInterest from "./ProductOfInterest";
import ProductSold from "./ProductSold";
import { getUserProfile } from "../../../store/action/profileAction";

function SellerSemuaProduk() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const option = ["produk", "diminati", "terjual"];
  const [myOption, setMyOption] = useState("produk");

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
    <section>
      <div className="container w-75">
        <div className={`${Style.profile}`}>
          <h1 className="fw-bold fs-4 mt-3 d-none d-xss-block">
            Daftar Jual Saya
          </h1>
          <div className="card p-3 mt-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={dataProfile?.data?.avatar || "/images/person.png"}
                    alt=""
                    className={`${Style.images} rounded`}
                  />
                  <div className="">
                    <p className="font-14 m-0 p-0 ms-2">{dataProfile.data.nama || "Nama Penjual"}</p>
                    <p className="font-10 color-gray m-0 p-0 ms-2">{dataProfile.data.kota || "Kota"}</p>
                  </div>
                </div>
                <button type="button" className="button-outline-2" onClick={() => navigate("/user/profile")}>
                  Edit
                </button>
              </div>
            {/* })} */}
          </div>
        </div>
        <div className={`mt-3 ${Style["responsive-option"]}`}>
          <div className={Style.category__wrapper}>
            <div className={Style["category__overflow-scroll-x"]}>
              <div className="w-100">
                <div className={`${Style.option} mb-3`}>
                  <h4 className={`${Style["title-option"]} mb-3`}>Kategori</h4>
                  <button
                    type="button"
                    key={option}
                    onClick={() => setMyOption("produk")}
                    className={`w-100 d-flex align-items-center justify-content-between fw-semibold ${
                      Style["button-option"]
                    } ${Style["bg-option"]} ${
                      myOption === "produk" && `${Style["color-purple-4"]}`
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      <i className={`${Style["icon-size"]} bi-box`} />
                      <p className={`${Style["responsive-text1"]} m-0 ms-2`}>
                        Semua Produk
                      </p>
                      <p className={`${Style["responsive-text2"]} m-0 ms-2`}>
                        Produk
                      </p>
                    </div>
                    <i className={`${Style["icon-size"]} bi-chevron-right`} />
                  </button>
                  <button
                    type="button"
                    key={option}
                    onClick={() => setMyOption("diminati")}
                    className={`${
                      myOption === "diminati" && `${Style["color-purple-4"]}`
                    } w-100 d-flex align-items-center justify-content-between fw-semibold  ${
                      Style["button-option"]
                    } ${Style["bg-option"]} `}
                  >
                    <div className="d-flex align-items-center">
                      <i className={`${Style["icon-size"]} bi-heart`} />
                      <p className="m-0 ms-2">Diminati</p>
                    </div>
                    <i className={`${Style["icon-size"]} bi-chevron-right`} />
                  </button>
                  <button
                    type="button"
                    key={option}
                    onClick={() => setMyOption("terjual")}
                    className={`${
                      myOption === "terjual" && `${Style["color-purple-4"]}`
                    } w-100 d-flex align-items-center justify-content-between fw-semibold border-0 ${
                      Style["bg-option"]
                    } `}
                  >
                    <div className="d-flex align-items-center">
                      <i
                        className={`${Style["icon-size"]} bi-currency-dollar`}
                      />
                      <p className="m-0 ms-2">Terjual</p>
                    </div>
                    <i className={`${Style["icon-size"]} bi-chevron-right`} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            {myOption === "produk" && (
              <div>
                <AllProduct />
              </div>
            )}
            {myOption === "diminati" && (
              <div>
                <ProductOfInterest />
              </div>
            )}
            {myOption === "terjual" && (
              <div>
                <ProductSold />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellerSemuaProduk;
