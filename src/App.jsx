import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importamos el Router y las Rutas
import NavBar from "./components/Navbar";
import 'font-awesome/css/font-awesome.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"; // Importamos el ItemDetailContainer
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          {/* Ruta para el catálogo */}
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a HypeGear!" />} />
          {/* Ruta para la categoría */}
          <Route path="/category/:id" element={<ItemListContainer greeting="¡Bienvenido a la categoría!" />} />
          {/* Ruta para los detalles del producto */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
