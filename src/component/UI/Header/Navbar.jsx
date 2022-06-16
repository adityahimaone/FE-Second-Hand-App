import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Navbar() {
  return (
    <nav className="shadow">
      <div className="container p-2">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-2">
            <h5 className="w-100">Old But New</h5>
          </div>
          <div className="col-4">
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="search"
              className="form-input-search"
              placeholder="Cari di sini ..."
            />
          </div>
          <div className="col-6 d-flex justify-content-end">
            <Button className="button-primary-1">
              <i className="bi bi-box-arrow-in-right"></i>
              <span className="px-2">Masuk</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
