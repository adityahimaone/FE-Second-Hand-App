import React from 'react'
import Style from './seller/sellersemuaproduk.module.css'

function InfoProfil() {
  return (
    <div className=''>
        <div className='d-flex mt-5 w-50 position-absolute start-50 translate-middle-x'>
            <div className={`${Style['width-left']}`} >
                <img src="/images/fi_arrow-left.png" alt=""/>
            </div>
            <div className={`${Style['width-right']} w-100`}>
            <form>
                <div className='mb-3 ms-3 position-absolute top-0 start-50 translate-middle-x'>
                    <div style={{width: '8rem'}}>
                        <div className={`${Style['color']} card d-flex justify-content-center align-items-center`}>
                            <img src="./images/fi_camera.svg" alt="" srcset="" className='mt-5 mb-5'/>
                        </div>
                    </div>
                </div>
                <div className="mb-3" style={{marginTop: '20vh'}}>
                    <label className="form-label" >Nama*</label>
                    <input type="text" className="form-control rounded-3" placeholder='Nama'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Kota*</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected disabled>Pilih Kota</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label className="form-label">Alamat*</label>
                    <div className="form-floating">
                        <textarea className="form-control rounded-3" placeholder="Leave a comment here" id="floatingTextarea" style={{height: '5rem'}}></textarea>
                        <label for="floatingTextarea">Contoh: Jalan Ikan Hiu 33</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label" >No Handphone*</label>
                    <input type="number" className="form-control rounded-3" placeholder='Contoh: +628123456789'/>
                </div>
                <div className='d-flex mt-5 mb-5'>
                    <button type="submit" className="button-primary-1 w-100">Submit</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default InfoProfil