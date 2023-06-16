import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/logo.png";

const Nav = () => {
  return (
    <nav class="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <a class="navbar-brand">
        <img src={Logo} width={100} />
        ToDo
      </a>

      <Link to="/" class="btn btn-outline-secondary m-4" type="submit">
        LogOut
      </Link>
    </nav>
  );
};

export default Nav;
