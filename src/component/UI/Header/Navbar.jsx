import React from "react";
import { Button } from "react-bootstrap";

function Navbar() {
  return (
    <nav className="d-flex justify-content-between w-100 border shadow p-2">
      <div>
        <h5>Logo</h5>
      </div>
      <div>
        <Button>Masuk</Button>
      </div>
    </nav>
  );
}

export default Navbar;
