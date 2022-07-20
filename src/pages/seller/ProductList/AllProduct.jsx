/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ConvertToIDR } from "utils/helper";
import Style from "./sellersemuaproduk.module.css";

function AllProduct({item}) {
  const navigate = useNavigate();

  const { id, nama, image, harga, category_id, category, product_image } = item;

  return (
          <Card
            className="card-1 h-100 p-2 rounded-2"
            style={{ maxHeight: "25rem" }}
            onClick={() => navigate(`/product/${id}`)}
          >
            <img
              className={`${Style['card-img']} rounded w-100`}
              style={{ height: "10rem", objectFit: "cover" }}
              src={
                product_image? product_image[0]?.url : "/images/detail.png"
              }
            />
            <Card.Body className={`${Style.padd} p-0 mt-2`}>
              <Card.Title className={`font-14 ${Style['font-title']}`}>{nama || "Nama"}</Card.Title>
              <Card.Text className="color-gray font-10 mb-1">
                {" "}
                {category ? category.nama : "X"}
              </Card.Text>
              <Card.Text className="font-14">
                {ConvertToIDR(harga)}
              </Card.Text>
            </Card.Body>
          </Card>
  );
}

export default AllProduct;
