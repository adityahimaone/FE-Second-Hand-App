import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ModalOffer({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      contentClassName="w-max-360"
    >
      <Modal.Header className="border-0" closeButton>
        {/* <Modal.Title>Modal heading</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <div>
          <h6 className="font-14">Masukkan Harga Tawarmu</h6>
          <p className="font-14 color-gray">
            Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </p>
        </div>
        <div className="d-flex flex-row p-2 rounded-3 gap-2 bg-color-gray2 shadow">
          <div>
            <img
              src="/images/dummy.png"
              className="rounded-1"
              style={{
                width: "48px",
                height: "48px",
              }}
              alt=""
            />
          </div>
          <div className="d-flex flex-column">
            <span className="font-14 fw-bold">Jam Tangan Casio</span>
            <span className="font-14">Rp 250.000</span>
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
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0 pt-0">
        <button className="button-primary-1 w-100 " type="submit">
          Kirim
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalOffer;
