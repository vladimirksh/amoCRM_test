import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      {" "}
      <header>
        <Link to="/">
          <h1>Pizza</h1>
        </Link>
      </header>
    </div>
  );
}

export default Header;
