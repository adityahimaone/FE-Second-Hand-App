import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { ConvertToIDR } from "../../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { postProductOffer } from "../../../store/action/offeringAction";

function ModalOffer({ show, handleClose, data }) {
  const dispatch = useDispatch();

  const { product_image, deskripsi, id, seller_id, nama, harga } = data;

  const { data: dataLogin } = useSelector((state) => state.login);

  const [priceOffer, setPriceOffer] = useState(0);
  const [token, setToken] = useState(dataLogin?.data?.token);

  const handleChangePriceOffer = (event) => {
    setPriceOffer(event.target.value);
  };

  const handleSubmitOffer = (event) => {
    event.preventDefault();
    dispatch(
      postProductOffer(token, {
        product_id: id,
        seller_id: seller_id,
        harga_tawar: parseInt(priceOffer),
      })
    );
    handleClose();
  };

  console.log(data, "data");
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="d-flex justify-content-center"
      contentClassName="w-max-360 "
    >
      <form onSubmit={handleSubmitOffer}>
        <Modal.Header className="border-0" closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div>
            <h6 className="font-14">Masukkan Harga Tawarmu</h6>
            <p className="font-14 color-gray">
              Harga tawaranmu akan diketahui penual, jika penjual cocok kamu
              akan segera dihubungi penjual.
            </p>
          </div>
          <div className="d-flex flex-row p-2 rounded-3 gap-2 bg-color-gray2 shadow">
            <div>
              <img
                src={product_image ? product_image[0].url : "/images/dummy.png"}
                className="rounded-1"
                style={{
                  width: "48px",
                  height: "48px",
                }}
                alt=""
              />
            </div>
            <div className="d-flex flex-column">
              <span className="font-14 fw-bold">{nama}</span>
              <span className="font-14">{ConvertToIDR(harga)}</span>
            </div>
          </div>
          <div className="mt-3">
            <label className="font-12 fw-bold mb-1" htmlFor="offer-price">
              Harga Tawar
            </label>
            <input
              className="form-input w-100 shadow"
              style={{ marginButtom: "1rem" }}
              placeholder="Rp. 0,00"
              type="number"
              name="price"
              onChange={handleChangePriceOffer}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <button className="button-primary-1 w-100 " type="submit">
            Kirim
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ModalOffer;
