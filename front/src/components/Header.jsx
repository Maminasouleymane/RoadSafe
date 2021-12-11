import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>
        {" "}
        <Link to={"/"}> SafeRoute</Link>{" "}
      </h1>
      <nav>
        {" "}
        <Link to={"/admin-login"}> Narsa</Link>{" "}
      </nav>
      <nav>Gendarme </nav>
    </div>
  );
};

export default Header;
