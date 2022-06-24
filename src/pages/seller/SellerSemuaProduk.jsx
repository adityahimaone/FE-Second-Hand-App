import React from 'react'
import { useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Product from '../../components/UI/Card/CardHome'
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
          price: 2500000,
        },
        {
          id: 7,
          name: "Jam Tangan Casio",
          category: "Aksesoris",
          price: 2500000,
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
                    <div className="row row-cols-4 row-cols-lg-4 g-4">
                        <div className='col'>
                            <Card style={{border: 'dashed 2px #D0D0D0', height:'16.25vw'}} >
                                <Card.Body style={{marginTop: '35%'}}>
                                    <Card.Text style={{fontSize: '30px'}} className="m-0">+</Card.Text>
                                    <Card.Text>Tambah Produk</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        {cardData.map((item) => (
                        <div key={item.id} className="col">
                            <Product
                            title={item.name}
                            category={item.category}
                            price={item.price}
                            />
                        </div>
                        ))}
                    </div>
                )}
                {myOption === "diminati" && (
                    <div>Halaman Diminati</div>
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