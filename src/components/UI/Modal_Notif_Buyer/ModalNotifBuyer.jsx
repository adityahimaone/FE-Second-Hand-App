import React from 'react'
import Style from "../Modal_Notif/Notif.module.css";

function ModalNotifBuyer() {
  return (
    <div className='container'>
        <div className={`card position-absolute border-1 ${Style["card-notif"]}`}>
          <div className="card-body ms-1">
                {/* Notif Penawaran berhasil */}
                <div className='d-flex border-bottom mt-2'>
                    <img src="/images/item watch.png" alt="" className={`rounded img ${Style["img"]}`}/>
                    <div className='ms-2 mb-2'>
                        <div className='d-flex'>
                            <p className='m-0 fw-normal font-10 color-gray'>Penawaran Produk</p>
                            <p className={`mb-0 fw-normal font-10 color-gray ${Style["txt"]}`}>20 Apr, 14:04 <img src="/images/Ellipse 1.svg" alt=""/></p>
                        </div>
                        <p className='m-0 fw-normal'>Nama Produk</p>
                        <p className='m-0 fw-normal'><s>Rp. 250.000</s></p>
                        <p className='m-0 fw-normal mb-2'>Berhasil ditawar Rp. 200.000</p>
                        <p className='m-0 fw-normal font-10 color-gray'>Kamu akan segera dihubungi penjual via whatsapp</p>
                    </div>
                </div>
                {/* Notif penawaran */}
                <div className='d-flex border-bottom mt-2'>
                    <img src="/images/item watch.png" alt="" className={`rounded img ${Style["img"]}`}/>
                    <div className='ms-2 mb-2'>
                        <div className='d-flex'>
                            <p className='m-0 fw-normal font-10 color-gray'>Penawaran Produk</p>
                            <p className={`mb-0 fw-normal font-10 color-gray ${Style["txt"]}`}>20 Apr, 14:04 <img src="/images/Ellipse 1.svg" alt=""/></p>
                        </div>
                        <p className='m-0 fw-normal'>Nama Produk</p>
                        <p className='m-0 fw-normal'>Rp. 250.000</p>
                        <p className='m-0 fw-normal'>Ditawar Rp. 200.000</p>
                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default ModalNotifBuyer