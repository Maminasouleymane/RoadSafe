import React from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../services/auth.service";

const Header = (props) => {
  const history = useHistory();
  const adminLogut = () => {
    authService.logout();
    history.push("/");
  };
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
      <nav>
        <Link to={"/"} onClick={adminLogut}>
          {props.title}
        </Link>
      </nav>
      <nav>Gendarme </nav>
    </div>
  );
};

export default Header;
