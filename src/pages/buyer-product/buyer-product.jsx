import React from "react";
import style from "./buyerproduct.module.css";
import Button from "react-bootstrap/esm/Button";
import { Component } from "react";



class BuyerProduct extends Component {
    state = {
        disabled: true
    }
    render() {
        return (
            <div className="container-sm w-75 my-5">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="mb-4">
                            <img src="/images/detail.png" className="img-fluid w-100" alt="" />
                        </div>
                        <div className="card p-3">
                            <h5 className="font-14 fw-bolder">Deskripsi</h5>
                            <p className="font-14 color-gray">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                        {/* </div>
                        <div className={`col-12 col-lg-4 ${style["detail"]}`}>
                            <h4>Jam Tangan Casio</h4>
                            <p>Aksesoris</p>
                            <h2>Rp 250.000</h2>
                            <Button className="button-primary-1 w-100 my-4" href="#" disabled="this.state.disabled" >
                                Saya tertarik dan ingin nego
                            </Button>
                        </div>
                        <div className={`d-flex flex-column ${style["Identity"]}`}>

                        </div>
                    </div> */}
                        <div className="col-12 col-lg-4">
                            <div className="card p-3">
                                <h4 className="font-16 fw-bolder">Jam Tangan</h4>
                                <h3 className="font-14 color-gray">Aksesoris</h3>
                                <h2 className="font-16">Rp. 250.000</h2>
                                <button className={`button-primary-1 w-100 my-3 disabled ${style["disabled"]}`} href="#" disabled="this.state.disabled">
                                    <p>Menunggu respon penjual</p> 
                                </button>
                            </div>
                            <div className="card p-3 mt-4 d-flex flex-row justify-content-start align-items-center gap-2">
                                <div>
                                    <img src="/images/person.png" className="img-fluid" alt="" />
                                </div>
                                <div className="d-flex flex-column">
                                    <label>Nama Penjual</label>
                                    <label>Kota</label>
                                </div>
                            </div>
                        </div>
                  
                </div>
            </div>
        )
    }
}

export default BuyerProduct;