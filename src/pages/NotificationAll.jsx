import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useSelector, useDispatch } from "react-redux";
import { getAllNotification } from "store/action/notificationAction";
import { ConvertToDate, ConvertToIDR } from "utils/helper";

const initialStateNotif = [
  {
    id: 0,
    negotation_id: 0,
    product_id: 0,
  },
];

function NotificationAll() {
  const dispatch = useDispatch();

  const { isLoading: isLoadingLogin, data: loginData } = useSelector(
    (state) => state.login
  );
  const { isLoading: isLoadingNotif, data: notificationData } = useSelector(
    (state) => state.notification
  );

  const [token, setToken] = useState(loginData?.data?.token);
  const [notifSeller, setNotifSeller] = useState(initialStateNotif);
  const [notifBuyer, setnotifBuyer] = useState(initialStateNotif);

  useEffect(() => {
    dispatch(getAllNotification(token));
    setNotifSeller(notificationData?.data?.notif_seller);
    setnotifBuyer(notificationData?.data?.notif_buyer);
  }, []);

  const newNotifSeller = notifSeller
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 10);

  const newNotifBuyer = notifBuyer
    .filter((item) => item?.data_nego?.is_accept === true)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 10);

  return (
    <div className="container mt-2">
      <Tabs
        defaultActiveKey="notif-seller"
        id="tab-notification"
        className="mb-3"
        fill
      >
        <Tab eventKey="notif-seller" title="Seller">
          {newNotifSeller?.map((item) => (
            <>
              <div className="d-flex gap-3 p-1 my-2" key={item.id}>
                <div>
                  <img
                    src={
                      item?.product_notif?.product_image
                        ? item?.product_notif?.product_image[0]?.url
                        : "/images/dummy.png"
                    }
                    className="img-small-product"
                    alt="product notificaton"
                  />
                </div>
                <div className="d-flex flex-column w-100">
                  <div className="d-flex justify-content-between font-10 color-gray">
                    <span>{item?.description}</span>
                    <div className="d-flex align-items-center gap-1">
                      <span>{ConvertToDate(item?.createdAt)}</span>
                      {!item?.is_read && <div className="shape-notification" />}
                    </div>
                  </div>
                  <div className="d-flex flex-column font-14 fw-bold">
                    <span>{item?.product_notif?.nama}</span>
                    <span>{ConvertToIDR(item?.product_notif?.harga)}</span>
                    <span>
                      Ditawar {ConvertToIDR(item?.data_nego?.harga_tawar)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-bottom" />
            </>
          ))}
        </Tab>
        <Tab eventKey="notif-buyer" title="Buyer">
          {newNotifBuyer?.map((item) => (
            <>
              <div className="d-flex gap-3 p-1 my-2" key={item.id}>
                <div>
                  <img
                    src={
                      item?.product_notif?.product_image
                        ? item?.product_notif?.product_image[0]?.url
                        : "/images/dummy.png"
                    }
                    className="img-small-product"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-column w-100">
                  <div className="d-flex justify-content-between font-10 color-gray">
                    <span>Penawaran produk</span>
                    <div className="d-flex align-items-center gap-1">
                      <span>{ConvertToDate(item?.createdAt)}</span>
                      {!item?.is_read && <div className="shape-notification" />}
                    </div>
                  </div>
                  <div className="d-flex flex-column font-14 fw-bold">
                    <span>{item?.product_notif?.nama}</span>
                    <span className="text-decoration-line-through">
                      {ConvertToIDR(item?.product_notif?.harga)}
                    </span>
                    <span>
                      Berhasil Ditawar{" "}
                      {ConvertToIDR(item?.data_nego?.harga_tawar)}
                    </span>
                    <span className="font-10 color-gray fw-normal">
                      Kamu akan segera dihubungi penjual via whatsapp
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-bottom" />
            </>
          ))}
        </Tab>
      </Tabs>
    </div>
  );
}

export default NotificationAll;
