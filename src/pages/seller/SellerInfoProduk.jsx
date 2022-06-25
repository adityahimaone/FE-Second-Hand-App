import React from 'react'
import Style from "./sellersemuaproduk.module.css"

function SellerInfoProduk() {
  return (
    <div className=''>
        <div className='d-flex mt-3 w-50 position-absolute start-50 translate-middle-x'>
            <div className={`${Style['width-left']}`} >
                <img src="/images/fi_arrow-left.png" alt=""/>
            </div>
            <div className={`${Style['width-right']} w-100`}>
            <form>
                <div className="mb-3">
                    <label className="form-label" >Nama Produk</label>
                    <input type="text" className="form-control" placeholder='Nama Produk'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Harga Produk</label>
                    <input type="text" className="form-control" placeholder='Harga Produk'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Kategori</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected disabled>Pilih Kategori</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label className="form-label">Deskripsi</label>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: '5rem'}}></textarea>
                        <label for="floatingTextarea">Deskripsi</label>
                    </div>
                </div>
                <div className='mb-3'>
                    <label className="form-label">Foto Produk</label>
                    <div style={{width: '8rem'}}>
                        <div className="card-dot d-flex justify-content-center align-items-center">
                            <i className="bi bi-plus-lg fs-3 mt-5 mb-5"></i>
                        </div>
                    </div>
                </div>
                <div className='d-flex mt-5'>
                    <button type="submit" className="button-primary-3 w-50 me-2">Submit</button>
                    <button type="submit" className="button-primary-1 w-50 ms-2">Submit</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SellerInfoProduk