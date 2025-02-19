import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Usamos react-icons para el ícono

const CartWidget = () => {
  const cartCount = 5; // Número hardcodeado, puedes cambiarlo o hacerlo dinámico más adelante

  return (
    <div className="cart-widget d-flex align-items-center">
      <FaShoppingCart size={24} className="text-white" />
      <span className="badge bg-danger">{cartCount}</span> {/* Notificación del número */}
    </div>
  );
};

export default CartWidget;
