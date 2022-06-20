import React from "react";
import CardHome from "../components/UI/Card/CardHome";
import Style from "../assets/styles/Home.module.css";
import Carousel from "../components/elements/Home/Carousel";
import { Button } from "react-bootstrap";

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
  return (
    <>
      <section id="banner" className="my-4">
        <div
          className="d-flex justify-content-center"
          style={{ overflow: "hidden" }}
        >
          <div className={Style["section-carousel"]}>
            <Carousel />
          </div>
        </div>
      </section>
      <section id="main" className={Style["section-main"]}>
        <div className="container">
          <div>
            <h6 className="fw-bold">Telusuri Kategori</h6>
            <div className="d-flex gap-2">
              <Button className="button-primary-1">
                <i className="bi bi-search"></i>
                <span className="px-2">Semua</span>
              </Button>
              {categoryList.map((item, index) => (
                <Button key={index + 1} className="button-primary-2">
                  <i className="bi bi-search"></i>
                  <span className="px-2">{item}</span>
                </Button>
              ))}
            </div>
          </div>
          <div className="my-3 row row-cols-2 row-cols-lg-6 g-2">
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
          <Button className={`button-primary-1 ${Style["button-float"]}`}>
            <i className="bi bi-plus-lg"></i>
            <span className="px-2">Jual</span>
          </Button>
        </div>
      </section>
    </>
  );
}

export default HomePage;
