import React from 'react'
import { useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import CardHome from '../../components/UI/Card/CardHome';
import Style from "./info.module.css"

function infoPenawaran() {
    
      
      
  return (
      
    <div className='container'>
     <div className={`${Style['arrows']}`} >
     <img src="/images/fi_arrow-left.png" alt=""/>
     </div>
      <div className={`card p-3  ${Style["cards"]} `}>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <img src="/images/person.png" alt="" className={`${Style['images']}`}/>
            <div className=''>
              <p className='font-14 m-0 p-0 ms-2'>Nama Penjual</p>
              <p className='font-10 color-gray m-0 p-0 ms-2'>Kota</p>
            </div>
          </div>
        
        </div>
      </div>
      <div className='d-flex mt-3' >
      
      <h6 className={`fw-bold fs-6 mt-3 ${Style['tulis']}`}>Daftar Produk Yang Ditawar</h6>
      <div className={`card-body rounded-4 p-3 ${Style["card-body"]}`}>
                <p className='font-10 color-gray m-0 p-0 ms-6'>Penawaran Product</p>
                 <p className={`font-10 color-gray ${Style["tanggal"]}` }>29 Juni 2022</p>
                {/* Item Product Match */}
                <div className='item d-flex align-items-start mt-3'>
                    <img src="/images/item watch.png" alt="" className={`rounded ${Style["item"]}`}/>
                    <div className='ms-2 align-content-center'>
                        <p className='m-0 fw-normal font-14'>Jam Tangan Casio</p>
                        <p className='m-0 fw-normal font-14'>Rp. 250.000</p>
                        <p className='m-0 fw-normal font-14'>Ditawar Rp. 200.000</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
              <button
                type="button"
                className={`${Style["button-primary-3"]} w-50 me-2`}
                onClick={''}
              >
                Tolak
              </button>
              <button
                type="button"
                className="button-primary-1 w-50 ms-2"
                onClick={''}
              >
                Terima
              </button>
            </div>
            </div>
    </div>
    </div>
    
  )
}

export default infoPenawaran