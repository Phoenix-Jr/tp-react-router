import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p>This is an Header</p>
      <p>This is a simple navigation</p>
      <p>
        <Link to={"/"}>First page</Link>

        <Link to={"/second"}>second page</Link>
      </p>
    </div>
  );
};

export default Header;
