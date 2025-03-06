import React from "react";
import { FaShoppingCart } from "react-icons/fa"; 

const CartWidget = () => {
  const cartCount = 5; 

  return (
    <div className="cart-widget d-flex align-items-center">
      <FaShoppingCart size={24} className="text-white" />
      <span className="badge bg-danger">{cartCount}</span> {}
    </div>
  );
};

export default CartWidget;
