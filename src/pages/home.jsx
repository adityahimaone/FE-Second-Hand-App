import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <>
      <section id="banner" className="my-4">
        <div className="d-flex justify-content-center">
          <img src="/images/img_banner.png" alt="" />
        </div>
      </section>
      <section id="main">
        <div className="container">
          <div>
            <h6 className="fw-bold">Telusuri Kategori</h6>
            <div className="d-flex gap-2">
              <Button className="button-primary-1">
                <i class="bi bi-search"></i>
                <span className="px-2">Semua</span>
              </Button>
              <Button className="button-primary-2">
                <i class="bi bi-search"></i>
                <span className="px-2">Baju</span>
              </Button>
            </div>
          </div>
          <div className="my-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" className="p-2" src="/images/dummy.png" />
              <Card.Body>
                <Card.Title>Jam Tangan Casio</Card.Title>
                <Card.Text>
                  <p className="color-gray">Aksesoris</p>
                  <p>Rp 250.000</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
