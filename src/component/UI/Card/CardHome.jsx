import React from "react";
import Card from "react-bootstrap/Card";
import { ConvertToIDR } from "../../../utils/helper";

function CardHome({ title, image, price, category }) {
  return (
    <Card>
      <Card.Img variant="top" className="p-2" src="/images/dummy.png" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <p className="color-gray">{category}</p>
          <p>{ConvertToIDR(price)}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardHome;
