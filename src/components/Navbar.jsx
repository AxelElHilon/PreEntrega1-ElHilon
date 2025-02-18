import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">HypeGear</a>
        <ul className="nav">
          <li className="nav-item"><a className="nav-link text-white" href="#">Remeras</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">Pantalones</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">Zapatillas</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
