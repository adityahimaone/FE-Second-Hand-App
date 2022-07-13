import React from "react";
import CardHome from "../components/UI/Card/CardHome";
import Style from "../assets/styles/ProductSellingList.module.css";

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

function ProductSellingList() {
  return (
    <div className="container my-4">
      <div className="">
        <h1 className="font-20">Daftar Jual Saya</h1>
      </div>
      <div>
        <div className="card d-flex flex-row p-2 justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="pe-2">
              <img src="/images/person.png" className="img-fluid" alt="" />
            </div>
            <div className="d-flex flex-column">
              <span className="font-14">Nama Penjual</span>
              <span className="font-10">Kota</span>
            </div>
          </div>
          <div>
            <button type="button" className="button-outline-2">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-3">
          <div className="card p-4">
            <h5>Kategori</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Semua Produk</li>
              <li className="list-group-item">Diminati</li>
              <li className="list-group-item">Terjual</li>
            </ul>
          </div>
        </div>
        <div className="col-9 ">
          <div className="row row-cols-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card-dot d-flex flex-column justify-content-center align-items-center h-100">
                <i className="bi bi-plus-lg fs-3" />
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
      </div>
    </div>
  );
}

export default ProductSellingList;
