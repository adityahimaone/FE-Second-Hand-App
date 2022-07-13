/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import CardHome from "components/UI/Card/CardHome";
import { HiMenu, HiSearch } from "react-icons/hi";
import Card from "react-bootstrap/Card";
import Style from "./sellersemuaproduk.module.css";

function SellerSemuaProduk() {
  const option = ["produk", "diminati", "terjual"];
  const [myOption, setMyOption] = useState("produk");

  const cardData = [
    {
      id: 1,
      name: "Jam Tangan Casio",
      category: "Aksesoris",
      price: 250000,
      diminati: false,
      terjual: false,
    },
    {
      id: 2,
      name: "Jam Tangan Casio",
      category: "Aksesoris",
      price: 250000,
      diminati: false,
      terjual: false,
    },
    {
      id: 3,
      name: "Jam Tangan Casio",
      category: "Aksesoris",
      price: 250000,
      diminati: false,
      terjual: false,
    },
  ];

  const removeByAttr = function (arr, attr, value) {
    let i = arr.length;
    // eslint-disable-next-line no-plusplus
    while (i--) {
      if (
        arr[i] &&
        // eslint-disable-next-line no-prototype-builtins
        arr[i].hasOwnProperty(attr) &&
        arguments.length > 2 &&
        arr[i][attr] === value
      ) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };

  return (
    <section>
      <div className={` ${Style.nav}`}>
        <div className="nav-home pt-3">
          <nav className="d-flex justify-content-between px-4">
            <button type="button" className="button-nav-home">
              <HiMenu className="fs-5" />
            </button>
            <div className="search w-100">
              <span className="position-relative d-flex justify-content-end h-100">
                <input
                  className="form-input-search h-100 w-75"
                  placeholder="Cari di sini ..."
                  type="text"
                />
                <button type="button" className="btn position-absolute">
                  <HiSearch className="fs-3" />
                </button>
              </span>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className={`${Style.profile}`}>
          <h1 className="fw-bold fs-4 mt-3">Daftar Jual Saya</h1>
          <div className="card p-3 mt-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src="/images/person.png"
                  alt=""
                  className={`${Style.images}`}
                />
                <div className="">
                  <p className="font-14 m-0 p-0 ms-2">Nama Penjual</p>
                  <p className="font-10 color-gray m-0 p-0 ms-2">Kota</p>
                </div>
              </div>
              <button type="button" className="button-outline-2">
                Edit
              </button>
            </div>
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
                      <p className="m-0 ms-2">Semua Produk</p>
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

          <div className="col text-center ">
            {myOption === "produk" && (
              <div className="col-9 w-100 ">
                <div className="row row-cols-2 row-cols-lg-3 g-4 ">
                  <div className="col">
                    <div className="card-dot d-flex flex-column justify-content-center align-items-center h-100 pt-5 pb-5">
                      <i className="bi bi-plus-lg fs-3" />
                      <span>Tambah Produk</span>
                    </div>
                  </div>
                  {cardData.map((item) => (
                    <div key={item.id} className="col text-start">
                      {/* <CardHome
                      title={item.name}
                      category={item.category}
                      price={item.price}
                    /> */}
                      {/* <Card className="card-1">
                        <Card.Img
                          variant="top"
                          className="img-card"
                          src="/images/item watch.png"
                        />
                        <Card.Body>
                          <Card.Title className="font-14">
                            {item.name}
                          </Card.Title>
                          <Card.Text className="color-gray font-10">
                            {" "}
                            {item.category}
                          </Card.Text>
                          <Card.Text className="font-14">
                            {item.price}
                          </Card.Text>
                        </Card.Body>
                      </Card> */}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {myOption === "diminati" && (
              <div>
                <div className="col-9 w-100">
                  <div className="row row-cols-2 row-cols-lg-3 g-4">
                    {cardData.map((item) => {
                      if (item.diminati === true) {
                        removeByAttr(cardData, "diminati", false);
                        return (
                          <div key={item.id} className="col">
                            {/* <CardHome
                            title={item.name}
                            category={item.category}
                            price={item.price}
                          /> */}
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                {cardData.map((item) => {
                  if (item.diminati !== true) {
                    cardData.length = 0;
                    return (
                      <div className="mt-4">
                        <img
                          src="/images/undraw_selection_re_ycpo 1.png"
                          alt=""
                          style={{ width: "300px" }}
                        />
                        <p className="mt-3">
                          Belum ada produkmu yang diminati nih, <br /> Sabar ya
                          rejeki nggak kemana kok
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            )}
            {myOption === "terjual" && (
              <div>
                <div className="col-9 w-100">
                  <div className="row row-cols-2 row-cols-lg-3 g-4">
                    {cardData.map((item) => {
                      if (item.terjual === true) {
                        removeByAttr(cardData, "terjual", false);
                        return (
                          <div key={item.id} className="col">
                            {/* <CardHome
                            title={item.name}
                            category={item.category}
                            price={item.price}
                          /> */}
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                {cardData.map((item) => {
                  if (item.terjual !== true) {
                    cardData.length = 0;
                    return (
                      <div className="mt-4">
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
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellerSemuaProduk;
