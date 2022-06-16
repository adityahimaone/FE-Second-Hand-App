import React from 'react'
import './modalNotif.css'

function ModalNotif() {
  return (
    <div className='container'>
        <div className="card position-absolute border-1 card-notif">
          <div className="card-body ms-1 mt-1">
                {/* Notif Penawaran Produk */}
                <div className='d-flex border-bottom'>
                    <img src="/images/item watch.png" alt="" className='rounded img'/>
                    <div className='ms-2'>
                        <div className='d-flex'>
                            <p className='m-0 fw-normal' style={{fontSize: '10px', color: '#8A8A8A'}}>Penawaran Produk</p>
                            <p className='mb-0 fw-normal txt' style={{fontSize: '10px', color: '#8A8A8A'}}>20 Apr, 14:04 <img src="/images/Ellipse 1.svg" alt=""/></p>
                        </div>
                        <p className='m-0 fw-normal'>Nama Produk</p>
                        <p className='m-0 fw-normal'>Rp. 250.000</p>
                        <p className='m-0 fw-normal mb-3'>Ditawar Rp. 200.000</p>
                    </div>
                </div>
                {/* Notif Upload Barang */}
                <div className='d-flex mt-3'>
                    <img src="/images/item watch.png" alt="" className='rounded img'/>
                    <div className='ms-2'>
                        <div className='d-flex'>
                            <p className='m-0 fw-normal' style={{fontSize: '10px', color: '#8A8A8A'}}>Berhasil diterbitkan</p>
                            <p className='mb-0 fw-normal txt' style={{fontSize: '10px', color: '#8A8A8A'}}>20 Apr, 14:04 <img src="/images/Ellipse 1.svg" alt=""/></p>
                        </div>
                        <p className='m-0 fw-normal'>Nama Produk</p>
                        <p className='m-0 fw-normal'>Rp. 250.000</p>
                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default ModalNotif