import React, { useId, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { putProductChangeStatus } from "store/action/changeStatusProductAction";
import { useParams } from "react-router-dom";

function ModalChangeStatus({ show, handleClose, data }) {
  const dispatch = useDispatch();
  const radioInput = useId();
  const { id } = useParams();

  console.log(data, "data");

  const { data: dataLogin } = useSelector((state) => state.login);

  const [radioValue, setRadioValue] = useState(false);
  const [token, setToken] = useState(dataLogin?.data?.token);

  const idDataNego = data?.data_nego?.id;

  const onChangeRadio = (e) => {
    setRadioValue(e.target.value);
  };

  const onSubmitChangeStatus = (e) => {
    e.preventDefault();
    dispatch(putProductChangeStatus(token, idDataNego, radioValue));
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="d-flex justify-content-center"
      contentClassName="w-max-360 "
    >
      <form onSubmit={onSubmitChangeStatus}>
        <Modal.Header className="border-0" closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <h6 className="font-14">Perbarui status penjualan produkmu</h6>
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status-change"
                id={`${radioInput}-1`}
                onChange={onChangeRadio}
                value
              />
              <label
                className="form-check-label font-14 fw-bold"
                htmlFor={`${radioInput}-1`}
              >
                Berhasil terjual
              </label>
            </div>
            <div className="ms-4">
              <p className="font-14 color-gray">
                Kamu telah sepakat menjual produk ini kepada pembeli
              </p>
            </div>
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status-change"
                id={`${radioInput}-2`}
                onChange={onChangeRadio}
                value={false}
              />
              <label
                className="form-check-label font-14 fw-bold"
                htmlFor={`${radioInput}-2`}
              >
                Batalkan transaksi
              </label>
            </div>
            <div className="ms-4">
              <p className="font-14 color-gray">
                Kamu membatalkan transaksi produk ini dengan pembeli
              </p>
            </div>
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

export default ModalChangeStatus;
