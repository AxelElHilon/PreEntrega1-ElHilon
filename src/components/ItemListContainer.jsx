import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-primary">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
