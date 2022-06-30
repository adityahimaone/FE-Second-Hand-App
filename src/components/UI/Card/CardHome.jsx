import React from "react";
import Card from "react-bootstrap/Card";
import { ConvertToIDR } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";

function CardHome({ id, title, image, price, category }) {
  const navigate = useNavigate();
  return (
    <Card className="card-2" onClick={() => navigate(`/product/buy/${id}`)}>
      <Card.Img variant="top" className="p-2" src="/images/dummy.png" />
      <Card.Body>
        <Card.Title className="font-14">{title}</Card.Title>
        <Card.Text className="color-gray font-10"> {category}</Card.Text>
        <Card.Text className="font-14">{ConvertToIDR(price)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardHome;
