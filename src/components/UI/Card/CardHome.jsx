/* eslint-disable camelcase */
import React from "react";
import Card from "react-bootstrap/Card";
import { ConvertToIDR } from "utils/helper";
import { useNavigate } from "react-router-dom";

function CardHome({ item }) {
  const navigate = useNavigate();

  const { id, nama, image, harga, category_id, category, product_image } = item;
  return (
    <Card
      className="card-1 h-100"
      onClick={() => navigate(`/product/buy/${id}`)}
    >
      <Card.Img
        variant="top"
        className="img-card"
        src={product_image ? product_image[0]?.url : "/images/detail.png"}
      />
      <Card.Body>
        <Card.Title className="font-14">{nama || "Nama"}</Card.Title>
        <Card.Text className="color-gray font-10">
          {" "}
          {category ? category.nama : "X"}
        </Card.Text>
        <Card.Text className="font-14">{ConvertToIDR(harga)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardHome;
