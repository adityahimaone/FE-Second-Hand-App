import React from "react";
import CardHome from "../components/UI/Card/CardHome";
import Style from "../assets/styles/Home.module.css";
import Carousel from "../components/elements/Home/Carousel.jsx";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HiMenu, HiSearch } from "react-icons/hi";

const cardData = [
  {
    id: 1,
    name: "Jam Tangan Casio",
    category: "Aksesoris",
    price: 250000,
  },
  {
    id: 2,
    name: "Jam Tangan Casio",
    category: "Aksesoris",
    price: 250000,
  },
  {
    id: 3,
    name: "Jam Tangan Casio",
    category: "Aksesoris",
    price: 250000,
  },
  {
    id: 4,
    name: "Jam Tangan Casio",
    category: "Aksesoris",
    price: 250000,
  },
  {
    id: 5,
    name: "Jam Tangan Casio",
    category: "Aksesoris",
    price: 2500000,
  },
  {
    id: 6,
    name: "Jam Tangan Casio",
    category: "Aksesoris",
    price: 25000,
  },
  {
    id: 7,
    name: "Jam Tangan Casio",
    category: "Aksesoris",
    price: 25000,
  },
  {
    id: 8,
    name: "Jam Tangan Casio",
    category: "Aksesoris",
    price: 25000,
  },
];

const categoryList = ["Hobi", "Kendaran", "Aksesoris", "Elektronik"];

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <section
        id="banner"
        className={`my-xss-4 position-relative ${Style["banner-mobile"]}`}
      >
        <div className="mx-2">
          <div className="nav-home pt-3">
            <nav className="d-flex justify-content-between px-4">
              <button className="button-nav-home">
                <HiMenu className="fs-5" />
              </button>
              <div className="search w-100">
                <span className="position-relative d-flex justify-content-end h-100">
                  <input
                    className="form-input-search h-100 w-75"
                    placeholder="Cari di sini ..."
                    type="text"
                  />
                  <button className="btn position-absolute">
                    <HiSearch className="fs-3" />
                  </button>
                </span>
              </div>
            </nav>
          </div>
        </div>
        <div
          className="d-flex justify-content-center "
          style={{ overflow: "hidden" }}
        >
          <div className={Style["section-carousel"]}>
            <Carousel />
          </div>
        </div>
      </section>
      <section id="main" className={Style["section-main"]}>
        <div className="container">
          <div className={Style["category__wrapper"]}>
            <h6 className="fw-bold">Telusuri Kategori</h6>
            <div className={Style["category__overflow-scroll-x"]}>
              <div className="d-flex gap-2 ">
                <button className="button-primary-1">
                  <i className="bi bi-search"></i>
                  <span className="px-2">Semua</span>
                </button>
                {categoryList.map((item, index) => (
                  <button key={index + 1} className="button-primary-2">
                    <i className="bi bi-search"></i>
                    <span className="px-2">{item}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="my-3 row row-cols-2 row-cols-xss-4 row-cols-lg-6 g-2">
            {cardData.map((item) => (
              <div key={item.id} className="col">
                <CardHome
                  id={item.id}
                  title={item.name}
                  category={item.category}
                  price={item.price}
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("/product/sell")}
            className={`button-primary-1 ${Style["button-float"]}`}
          >
            <i className="bi bi-plus-lg"></i>
            <span className="px-2">Jual</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default HomePage;
