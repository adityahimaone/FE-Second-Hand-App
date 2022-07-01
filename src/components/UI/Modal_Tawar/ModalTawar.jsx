import React, { useState } from 'react'
import Style from "./Tawar.module.css"



 
function ModalTawar() {
 const [text, enableButton] = useState("");

  
  

  return (
    <div className={`card position-absolute border-1 ${Style["card-style"]}`}>
        <div className="card-body p-4">
            <button className={`${Style["close"]}`}><img src="/images/close_button.svg" alt="" /></button>
            <h1 className="card-text mb-0 mt-4 font-14 fw-semibold">Masukkan Harga Tawranmu</h1>
            <h2 className="card-text mt-2 mb-0 font-14 color-gray">Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</h2>
            <div className={`card-body rounded-4 p-3 mt-3 ${Style["card-body"]}`}>
                
                {/* Profile Product Match */}

                {/* Item Product Match */}
                <div className='item d-flex align-items-start mt-3'>
                    <img src="/images/item watch.png" alt="" className={`rounded ${Style["item"]}`}/>
                    <div className='ms-2 align-content-center'>
                        <p className='m-0 fw-normal font-14'>Nama Pembeli</p>
                        <p className='m-0 fw-normal font-14'><s>Rp. 250.000</s></p>
                    </div>
                </div>
                
            </div>
            {/* Button */}
            <div className={`d-flex justify-content-center rounded-4 mt-4 ${Style["button"]}`}>
            <button type="submit" className={`button-primary-1 w-100 ${Style["button-primary-1"]}`} disabled={!text}>Kirim</button>
            </div>
        </div>
    </div>
  )
}

export default ModalTawar