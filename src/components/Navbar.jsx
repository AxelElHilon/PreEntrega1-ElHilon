import React from "react";
import { Link } from "react-router-dom"; // Importamos Link para navegación
import CartWidget from "./CartWidget"; 
import './NavBar.css';
import logo from "../assets/logo.png";  // Ruta del logo

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark tech-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img 
            src={logo} 
            alt="HypeGear Logo" 
            style={{ height: '40px' }}  // Ajusta la altura del logo según lo necesites
          />
        </Link> 
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/category/remeras">Remeras</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/category/pantalones">Pantalones</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/category/buzos">Buzos</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
