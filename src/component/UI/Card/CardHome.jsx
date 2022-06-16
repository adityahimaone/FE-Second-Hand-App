import React from "react";
import Card from "react-bootstrap/Card";
import { ConvertToIDR } from "../../../utils/helper";

function CardHome({ title, image, price, category }) {
  return (
    <Card>
      <Card.Img variant="top" className="p-2" src="/images/dummy.png" />
      <Card.Body>
        <Card.Title className="font-14">{title}</Card.Title>
        <Card.Text>
          <h6 className="color-gray font-10">{category}</h6>
          <h6 className="font-14">{ConvertToIDR(price)}</h6>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardHome;
