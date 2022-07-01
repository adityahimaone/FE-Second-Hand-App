/* eslint-disable array-callback-return */
import React from "react";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import CardHome from "../../components/UI/Card/CardHome";
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
    while (i--) {
      if (
        arr[i] &&
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
    <div className="container">
      <h1 className="fw-bold fs-4 mt-3">Daftar Jual Saya</h1>
      <div className="card p-3 mt-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="/images/person.png"
              alt=""
              className={`${Style["images"]}`}
            />
            <div className="">
              <p className="font-14 m-0 p-0 ms-2">Nama Penjual</p>
              <p className="font-10 color-gray m-0 p-0 ms-2">Kota</p>
            </div>
          </div>
          <button className="button-outline-2">Edit</button>
        </div>
      </div>
      <div className="d-flex mt-3">
        <div
          className="w-25 card rounded-4 border p-3 me-4"
          style={{ height: "fit-content" }}
        >
          <ListGroup>
            <ListGroup.Item
              key={option}
              onClick={() => setMyOption("produk")}
              className={`d-flex align-items-center justify-content-between bg-white fw-semibold border-0 border-bottom ${
                myOption === "produk" && "color-purple-4"
              }`}
            >
              <div className="d-flex align-items-center">
                <i className={`${Style["icon-size"]} bi-box`}></i>
                <p className="m-0 ms-2">Semua Produk</p>
              </div>
              <i className={`${Style["icon-size"]} bi-chevron-right`}></i>
            </ListGroup.Item>
            <ListGroup.Item
              key={option}
              onClick={() => setMyOption("diminati")}
              className={`${
                myOption === "diminati" && "color-purple-4"
              } d-flex align-items-center justify-content-between bg-white fw-semibold border-0 border-bottom`}
            >
              <div className="d-flex align-items-center">
                <i className={`${Style["icon-size"]} bi-heart`}></i>
                <p className="m-0 ms-2">Diminati</p>
              </div>
              <i className={`${Style["icon-size"]} bi-chevron-right`}></i>
            </ListGroup.Item>
            <ListGroup.Item
              key={option}
              onClick={() => setMyOption("terjual")}
              className={`${
                myOption === "terjual" && "color-purple-4"
              } d-flex align-items-center justify-content-between bg-white fw-semibold border-0 `}
            >
              <div className="d-flex align-items-center">
                <i className={`${Style["icon-size"]} bi-currency-dollar`}></i>
                <p className="m-0 ms-2">Terjual</p>
              </div>
              <i className={`${Style["icon-size"]} bi-chevron-right`}></i>
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div className="col text-center">
          {myOption === "produk" && (
            <div className="col-9 w-100">
              <div className="row row-cols-2 row-cols-lg-3 g-4">
                <div className="col">
                  <div className="card-dot d-flex flex-column justify-content-center align-items-center h-100">
                    <i className="bi bi-plus-lg fs-3"></i>
                    <span>Tambah Produk</span>
                  </div>
                </div>
                {cardData.map((item) => (
                  <div key={item.id} className="col">
                    <CardHome
                      title={item.name}
                      category={item.category}
                      price={item.price}
                    />
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
                          <CardHome
                            title={item.name}
                            category={item.category}
                            price={item.price}
                          />
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
                          <CardHome
                            title={item.name}
                            category={item.category}
                            price={item.price}
                          />
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
  );
}

export default SellerSemuaProduk;
