import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <p>This is a simple navigation</p>
      <p>
        <Link to={"/"}>First page</Link>

        <Link to={"/second"}>second page</Link>
      </p>
    </div>
  );
};

export default Navigation;
