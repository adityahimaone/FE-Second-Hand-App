import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { ConvertToIDR } from "../../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { BsWhatsapp } from "react-icons/bs";

function ModalAccept({ show, handleClose, data }) {
  const dispatch = useDispatch();

  const { product_image, deskripsi, id, seller_id, nama, harga } = data;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="d-flex justify-content-center"
      contentClassName="w-max-360 "
    >
      <form>
        <Modal.Header className="border-0" closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div>
            <h6 className="font-14">
              Yeay kamu berhasil mendapat harga yang sesuai
            </h6>
            <p className="font-14 color-gray">
              Segera hubungi pembeli melalui whatsapp untuk transaksi
              selanjutnya
            </p>
          </div>
          <div className="d-flex flex-column p-2 rounded-3 gap-2 bg-color-gray2 shadow">
            <h6 className="font-14 fw-bold text-center">Product Match</h6>
            <div className="d-flex gap-2 align-items-center">
              <div>
                <img
                  src={
                    product_image ? product_image[0].url : "/images/dummy.png"
                  }
                  className="rounded-1"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                  alt=""
                />
              </div>
              <div className="d-flex flex-column">
                <span className="font-14 fw-bold">Nama Pembeli</span>
                <span className="font-10 color-gray">kota</span>
              </div>
            </div>
            <div className="d-flex gap-2">
              <div>
                <img
                  src={
                    product_image ? product_image[0].url : "/images/dummy.png"
                  }
                  className="rounded-1"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                  alt=""
                />
              </div>
              <div className="d-flex flex-column">
                <span className="font-14 fw-bold">
                  {nama ? nama : "Nama Produk"}
                </span>
                <span className="font-14 text-decoration-line-through">
                  {ConvertToIDR(harga)}
                </span>
                <span className="font-14">Ditawar {ConvertToIDR(harga)}</span>
              </div>
            </div>
          </div>
          <div className="mt-3"></div>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <button
            className="d-inline gap-2 button-primary-1 w-100"
            type="submit"
          >
            <span>Hubungi via Whatsapp </span> <BsWhatsapp />
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ModalAccept;
