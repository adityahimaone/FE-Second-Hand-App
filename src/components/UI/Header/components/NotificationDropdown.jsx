import React, { useState } from "react";
import { ConvertToDate, ConvertToIDR } from "utils/helper";
import { Dropdown } from "react-bootstrap";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function NotificationDropdown({ notifSeller, notifBuyer }) {
  const navigate = useNavigate();

  const [tabsNotif, setTabsNotif] = useState(1);

  // filter item?.createdAt new
  const newNotifSeller = notifSeller
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    ?.slice(0, 5);

  const newNotifBuyer = notifBuyer
    ?.filter((item) => item.data_nego.is_accept === true)
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    ?.slice(0, 5);

  console.log(newNotifBuyer, "newNotifBuyer");

  return (
    <Tabs
      defaultActiveKey="notif-seller"
      id="tab-notification"
      className="mb-3"
      fill
    >
      <Tab eventKey="notif-seller" title="Seller">
        {newNotifSeller?.map((item) => (
          <>
            <Dropdown.Item
              key={item.id}
              onClick={() => navigate(`/notification/${item.id}`)}
            >
              <div className="d-flex gap-3 p-1">
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
                    <span>{item?.description}</span>
                    <div className="d-flex align-items-center gap-1">
                      <span>{ConvertToDate(item?.createdAt)}</span>
                      {!item?.is_read && <div className="shape-notification" />}
                    </div>
                  </div>
                  <div className="d-flex flex-column font-14 fw-bold">
                    <span>{item?.product_notif?.nama}</span>
                    <span>{ConvertToIDR(item?.product_notif?.harga)}</span>
                    {item?.description === "Penawaran produk" && (
                      <span>
                        Ditawar {ConvertToIDR(item?.data_nego?.harga_tawar)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
          </>
        ))}
      </Tab>
      <Tab eventKey="notif-buyer" title="Buyer">
        {newNotifBuyer?.map((item) => (
          <>
            <Dropdown.Item>
              <div className="d-flex gap-3 p-1">
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
            </Dropdown.Item>
            <Dropdown.Divider />
          </>
        ))}
      </Tab>
    </Tabs>
  );
}

export default NotificationDropdown;
