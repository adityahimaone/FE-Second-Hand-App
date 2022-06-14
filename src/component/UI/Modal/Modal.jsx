import React from 'react'
import "./modal.css"

function Modal() {
  return (
    <div className="card position-absolute border-1">
        <div className="card-body p-4">
            <button className='bg-transparent p-0 border-0 position-absolute top-0 end-0 mt-4 me-4'><img src="/images/close_button.svg" alt="" /></button>
            <h1 className="card-text mb-0">Yeay kamu berhasil mendapatkan harga yang sesuai</h1>
            <h2 className="card-text mt-2 mb-0">Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</h2>
            <div className='card-body rounded-4 p-3 mt-3'>
                <p className='text-center'>Product Match</p>
                {/* Profile Product Match */}
                <div className='item d-flex align-items-center'>
                    <img src="/images/people image.jpg" alt="" className='rounded'/>
                    <div className='ms-2 align-content-center'>
                        <p className='m-0'>Nama Pembeli</p>
                        <p className='m-0 fw-normal item'>Kota</p>
                    </div>
                </div>
                {/* Item Product Match */}
                <div className='item d-flex align-items-start mt-3'>
                    <img src="/images/item watch.png" alt="" className='rounded'/>
                    <div className='ms-2 align-content-center'>
                        <p className='m-0 fw-normal'>Nama Pembeli</p>
                        <p className='m-0 fw-normal'><s>Rp. 250.000</s></p>
                        <p className='m-0 fw-normal'>Ditawar Rp. 200.000</p>
                    </div>
                </div>
            </div>
            {/* Button */}
            <div className='button d-flex justify-content-center rounded-4 mt-4'>
                <button className='bg-transparent border-0 text-white ms-5'>Hubungi Penjual <img src="/images/whatsapp icon.svg" alt="" className='ms-5'/></button>
            </div>
        </div>
    </div>
  )
}

export default Modal