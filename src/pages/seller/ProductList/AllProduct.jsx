/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyProduct } from "store/action/ProductSellerAction";
import { ConvertToIDR } from "utils/helper";
import Style from "./sellersemuaproduk.module.css";

function AllProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: dataLogin } = useSelector((state) => state.login);
  const { data: myProductData } = useSelector(
    (state) => state.seller_my_product
  );

  const [token] = useState(dataLogin?.data?.token);

  myProductData?.data
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    ?.slice(0, 5);

  useEffect(() => {
    dispatch(getMyProduct(token));
  }, []);

  console.log(myProductData.data, "my product");
  return (
    <div className="row row-cols-2 row-cols-lg-3 g-4 mb-5">
      <div className="col">
        <div className="card-dot d-flex flex-column justify-content-center align-items-center h-100 pt-5 pb-5">
          <i className="bi bi-plus-lg fs-3" />
          <span className={`${Style['font-title']} font-14`}>Tambah Produk</span>
        </div>
      </div>
      {myProductData?.data?.map((item) => (
        <div key={item.id} className="col text-start">
          <Card
            className="card-1 h-100 p-2 rounded-2"
            style={{ maxHeight: "25rem" }}
            onClick={() => navigate("/")}
          >
            <img
              className={`${Style['card-img']} rounded`}
              style={{ maxWidth: "20rem", height: "10rem", objectFit: "cover" }}
              src={
                item.product_image? item.product_image[0]?.url : "/images/detail.png"
              }
            />
            <Card.Body className={`${Style.padd} p-0 mt-2`}>
              <Card.Title className={`font-14 ${Style['font-title']}`}>{item.nama || "Nama"}</Card.Title>
              <Card.Text className="color-gray font-10 mb-1">
                {" "}
                {item.category ? item.category.nama : "X"}
              </Card.Text>
              <Card.Text className="font-14">
                {ConvertToIDR(item.harga)}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default AllProduct;
