import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailNotification } from "store/action/notificationAction";
import ModalAccept from "components/UI/Modal_Accept/ModalAccept";
import { ConvertToDate } from "utils/helper";
import { putProductAcceptNegotiation } from "store/action/acceptNegotiationAction";
import { BsWhatsapp } from "react-icons/bs";
import ModalChangeStatus from "components/UI/Modal_Status/ModalChangeStatus";

function NotificationSeller() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading: isLoadingLogin, data: loginData } = useSelector(
    (state) => state.login
  );

  const { isLoading: isLoadingNotifByID, data: notificationByIDData } =
    useSelector((state) => state.notification_by_id);

  const { data: dataNegotation } = useSelector(
    (state) => state.acceptNegotation
  );
  const [token, setToken] = useState(loginData?.data?.token);
  const [dataNotifByID, setdataNotifByID] = useState(
    notificationByIDData?.data
  );
  const [modalAcceptShow, setModalAcceptShow] = useState(false);
  const [modalStatusShow, setmodalStatusShow] = useState(false);

  const handleModalAcceptShow = () => setModalAcceptShow(true);
  const handleModalAcceptClose = () => setModalAcceptShow(false);
  const handleModalStatusShow = () => setmodalStatusShow(true);
  const handleModalStatusClose = () => setmodalStatusShow(false);

  useEffect(() => {
    dispatch(getDetailNotification(token, id));
  }, []);

  const onAcceptNegotation = () => {
    dispatch(putProductAcceptNegotiation(token, dataNotifByID?.data_nego?.id));
    if (dataNegotation.status === true) {
      handleModalAcceptShow();
    }
  };

  console.log(dataNotifByID, notificationByIDData.data, "id");
  const portalDiv = document.getElementById("modal");

  return (
    <>
      {ReactDOM.createPortal(
        <ModalAccept
          show={modalAcceptShow}
          handleClose={handleModalAcceptClose}
          data={dataNotifByID}
        />,
        portalDiv
      )}
      {ReactDOM.createPortal(
        <ModalChangeStatus
          show={modalStatusShow}
          handleClose={handleModalStatusClose}
          data={dataNotifByID}
        />,
        portalDiv
      )}
      <div className="container d-flex justify-content-center">
        <div className="w-max-570 w-100 my-4 position-relative">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn position-absolute"
            style={{ left: "-4.375rem" }}
          >
            <i className="bi bi-arrow-left fs-4" />
          </button>
          <div className="card d-flex flex-row p-2 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="pe-2">
                <img
                  src={
                    dataNotifByID?.buyer?.avatar
                      ? dataNotifByID?.buyer?.avatar
                      : "/images/person.png"
                  }
                  className="img-small-product"
                  alt=""
                />
              </div>
              <div className="d-flex flex-column">
                <span className="font-14">{dataNotifByID?.buyer?.nama}</span>
                <span className="font-10">{dataNotifByID?.buyer?.kota}</span>
              </div>
            </div>
          </div>
          <div className="my-3">
            <h6 className="font-14 fw-bolder">Daftar produkmu yang ditawar</h6>
          </div>
          <div>
            <div className="card p-2">
              <div className="row">
                <div className="col-2 d-flex justify-content-center">
                  <div>
                    <img
                      src={
                        dataNotifByID?.product_notif
                          ? dataNotifByID?.product_notif?.product_image[0]?.url
                          : "/images/person.png"
                      }
                      className="img-small-product "
                      alt="peoplw"
                    />
                  </div>
                </div>
                <div className="col-10 d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <span className="font-10">Penawaran produk</span>
                    <span className="font-10">
                      {ConvertToDate(dataNotifByID?.createdAt)}
                    </span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="font-14">
                      {dataNotifByID?.product_notif?.nama}
                    </span>
                    <span className="font-14">
                      {dataNotifByID?.product_notif?.harga}
                    </span>
                    <span className="font-14">
                      Ditawar {dataNotifByID?.data_nego?.harga_tawar}
                    </span>
                  </div>
                  <div className="d-flex justify-content-end gap-2">
                    {dataNotifByID?.data_nego?.is_accept ? (
                      <>
                        <button
                          onClick={handleModalStatusShow}
                          type="button"
                          className="button-outline-2 px-5"
                        >
                          Status
                        </button>
                        <a
                          href="/#"
                          className="d-flex gap-2 button-primary-1 align-items-center text-decoration-none"
                        >
                          <span>Hubungi di </span> <BsWhatsapp />
                        </a>
                      </>
                    ) : (
                      <>
                        <button type="button" className="button-outline-2 px-5">
                          Tolak
                        </button>
                        <button
                          type="button"
                          onClick={onAcceptNegotation}
                          className="button-primary-1 px-5"
                        >
                          Terima
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationSeller;
