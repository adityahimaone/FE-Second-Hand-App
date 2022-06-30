import React from 'react'
import { useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import CardHome from '../../components/UI/Card/CardHome';
import Style from "./sellersemuaproduk.module.css"

function SellerSemuaProduk() {
    const option = ["produk", "diminati", "terjual"];
    const [myOption, setMyOption] = useState("produk");
    
    const cardData = [
        {
          id: 1,
          name: "Jam Tangan Casio",
          category: "Aksesoris",
          price: 250000,
          diminati: true,
        },
        {
          id: 2,
          name: "Jam Tangan Casio",
          category: "Aksesoris",
          price: 250000,
          diminati: false,
        },
        {
          id: 3,
          name: "Jam Tangan Casio",
          category: "Aksesoris",
          price: 250000,
          diminati: false,
        },
        {
          id: 4,
          name: "Jam Tangan Casio",
          category: "Aksesoris",
          price: 250000,
          diminati: false,
        },
        {
          id: 5,
          name: "Jam Tangan Casio",
          category: "Aksesoris",
          price: 2500000,
          diminati: false,
        },
        {
          id: 6,
          name: "Jam Tangan Casio",
          category: "Aksesoris",
          price: 2500000,
          diminati: false,
        },
        {
          id: 7,
          name: "Jam Tangan Casio",
          category: "Aksesoris",
          price: 2500000,
          diminati: false,
        }
      ];
      
  return (
    <div className='container'>
      <h1 className='fw-bold fs-4 mt-3'>Daftar Jual Saya</h1>
      <div className='card p-3 mt-3'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <img src="/images/person.png" alt="" className={`${Style['images']}`}/>
            <div className=''>
              <p className='font-14 m-0 p-0 ms-2'>Nama Penjual</p>
              <p className='font-10 color-gray m-0 p-0 ms-2'>Kota</p>
            </div>
          </div>
          <button className='button-outline-2'>Edit</button>
        </div>
      </div>
      <div className='d-flex mt-3' >
        <div className='w-25 card rounded-4 border p-3 me-4' style={{height: 'fit-content'}}>
                  <ListGroup >
                    <ListGroup.Item 
                    key={option}
                    onClick={() => setMyOption('produk')}
                    className={`bg-white fw-semibold border-0 border-bottom ${myOption === 'produk' && "color-purple-5"}`}>Semua Produk</ListGroup.Item>
                    <ListGroup.Item 
                    key={option}
                    onClick={() => setMyOption('diminati')}
                    className={`${myOption === 'diminati' && "color-purple-5"} bg-white fw-semibold border-0 border-bottom`}>Diminati</ListGroup.Item>
                    <ListGroup.Item 
                    key={option}
                    onClick={() => setMyOption('terjual')}
                    className={`${myOption === 'terjual' && "color-purple-5"} bg-white fw-semibold border-0 `}>Terjual</ListGroup.Item>
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
                {myOption === "diminati" &&(
                    // <div onChange={cardDiminati}>
                    //   {cardData.map((item) => (
                    //   <div key={item.id} className="col">
                    //     <CardHome
                    //       title={item.name}
                    //       category={item.category}
                    //       price={item.price}
                    //     />
                    //   </div>
                    // ))}
                    // </div>
                    
                    <div>
                      {cardData.map((item) => {
                        if (item.diminati === true) {
                          return <div key={item.id} className="col">
                          <CardHome
                            title={item.name}
                            category={item.category}
                            price={item.price}
                          />
                        </div>
                        }
                      })}
                    </div>
                )}
                {myOption === "terjual" && (
                    <div>Halaman Terjual</div>
                )}
        </div>
    </div>
    </div>
  )
}

export default SellerSemuaProduk