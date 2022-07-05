import React from "react";
import Card from "react-bootstrap/Card";
import { ConvertToIDR } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";

function CardHome({ item }) {
  const navigate = useNavigate();

  const { id, nama, image, harga, category_id, category } = item;
  return (
    <Card className="card-2" onClick={() => navigate(`/product/buy/${id}`)}>
      <Card.Img variant="top" className="p-2" src="/images/dummy.png" />
      <Card.Body>
        <Card.Title className="font-14">{nama}</Card.Title>
        <Card.Text className="color-gray font-10"> {category.nama}</Card.Text>
        <Card.Text className="font-14">{ConvertToIDR(harga)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardHome;
