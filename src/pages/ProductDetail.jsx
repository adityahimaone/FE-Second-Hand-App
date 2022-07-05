import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID, getAllProduct } from "src/store/action/productAction";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  let result = {};
  useEffect(() => {
    dispatch(getProductByID(id));
  }, []);

  console.log(result, "result");

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
        <div className="col-12 col-lg-4">
          <div className="card p-3">
            <h4 className="font-16 fw-bolder">Jam Tangan</h4>
            <h3 className="font-14 color-gray">Aksesoris</h3>
            <h2 className="font-16">Rp. 250.000</h2>
            <button className="button-primary-1">Terbitkan</button>
            <button className="button-outline-2 gap-4px">Edit</button>
          </div>
          <div className="card p-3 mt-2 d-flex flex-row justify-content-start align-items-center gap-2">
            <div>
              <img src="/images/person.png" className="img-fluid" alt="" />
            </div>
            <div className="d-flex flex-column">
              <span>Nama Penjual</span>
              <span>Kota</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
