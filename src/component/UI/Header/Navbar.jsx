import React from "react";
import { Button } from "react-bootstrap";

function Navbar() {
  return (
    <nav className="shadow ">
      <div className="container d-flex justify-content-between align-items-center p-2">
        <div>
          <h5>Old But New</h5>
        </div>
        <div>
          <Button className="bg-primary text-white">
            <i class="bi bi-box-arrow-in-right"></i>
            Masuk
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
