/* eslint-disable no-unused-expressions */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyProduct, getProductSold } from "store/action/ProductSellerAction";
import { getUserProfile } from "store/action/profileAction";
import { getWishlist } from "store/action/wishlistAction";
import ProductOfInterest from "./ProductOfInterest";
import AllProduct from "./AllProduct";
import ProductSold from "./ProductSold";
import Style from "./sellersemuaproduk.module.css";

function SellerSemuaProduk() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const option = ["produk"];
  const option1 = ["diminati"];
  const option2 = ["terjual"];
  const [myOption, setMyOption] = useState("produk");

  const { data: dataLogin } = useSelector((state) => state.login);
  const [token, setToken] = useState(dataLogin?.data?.token);

  const {
    isLoading,
    data: dataProfile,
    error,
  } = useSelector((state) => state.profile);

  const { data: myProductData } = useSelector(
    (state) => state.seller_my_product
  );
  const { data: productSold } = useSelector(
    (state) => state.product_sold_reducer
  );
  const { data: myWishList } = useSelector((state) => state.wishlist);

  myProductData?.data
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    ?.slice(0, 5);

  useEffect(() => {
    dispatch(getUserProfile(token));
    dispatch(getMyProduct(token));
    dispatch(getProductSold(token));
    dispatch(getWishlist(token));
  }, []);
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
                  <p className="font-14 m-0 p-0 ms-2">
                    {dataProfile.data.nama || "Nama Penjual"}
                  </p>
                  <p className="font-10 color-gray m-0 p-0 ms-2">
                    {dataProfile.data.kota || "Kota"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="button-outline-2"
                onClick={() => navigate("/user/profile")}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className={`${Style["grid-option"]} w-100 mt-3`}>
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
                    key={option1}
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
                    key={option2}
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

          <div className="w-100">
            {myOption === "produk" && (
              <div className="row ">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mb-3 ">
                  <button
                    type="button"
                    onClick={() => navigate("/product/sell")}
                    className="bg-transparent card-dot d-flex flex-column justify-content-center align-items-center h-100 p-5 w-100"
                  >
                    <i className="bi bi-plus-lg fs-3" />
                    <span className={`${Style["font-title"]} font-14`}>
                      Tambah Produk
                    </span>
                  </button>
                </div>
                {myProductData?.data.map((item) => {
                  if (item?.is_sold === false) {
                    return (
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mb-3">
                        <AllProduct item={item} />
                      </div>
                    );
                  }
                })}
              </div>
            )}
            {myOption === "diminati" && (
              <div className="row">
                {/* <div className="col-4">
                  {myWishList?.data?.map((item) => (
                    <div>
                      <ProductOfInterest item={item.wishlist} />
                    </div>
                  ))}
                </div> */}
                {myWishList?.data?.length >= 1 ? (
                  myWishList?.data?.map((item) => (
                    <div className="col-4">
                      <ProductOfInterest item={item.wishlist} />
                    </div>
                  ))
                ) : (
                  <div className="text-center">
                    <img
                      src="/images/undraw_selection_re_ycpo 1.png"
                      alt=""
                      style={{ width: "300px" }}
                    />
                    <p className="mt-3">
                      Kamu belum menambahkan produk di Wishlist
                    </p>
                  </div>
                )}
              </div>
            )}
            {myOption === "terjual" && (
              <div>
                <div className="row">
                  {productSold?.data?.length >= 1 ? (
                    productSold?.data?.map((item) => (
                      <div className="col-4">
                        <ProductSold item={item} />
                      </div>
                    ))
                  ) : (
                    <div className="text-center">
                      <img
                        src="/images/undraw_selection_re_ycpo 1.png"
                        alt=""
                        style={{ width: "300px" }}
                      />
                      <p className="mt-3">
                        Belum ada produkmu yang terjual nih, <br /> Sabar ya
                        rejeki nggak kemana kok
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellerSemuaProduk;
