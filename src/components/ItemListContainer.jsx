import React from "react";
import './ItemListContainer.css'; 

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemListContainer">
      <h1 className="greetingText">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
