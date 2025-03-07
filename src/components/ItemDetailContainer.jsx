import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Usamos useParams para obtener el id del producto
import './ItemDetailContainer.css';
const ItemDetailContainer = () => {
  const { id } = useParams(); // Usamos useParams para obtener el parámetro 'id' de la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulamos una base de datos de productos
  const allProducts = [
    { id: 1, name: "Remera Básica", category: "remeras", price: "$20", description: "Una remera cómoda para el día a día." },
    { id: 2, name: "Remera con Logo", category: "remeras", price: "$25", description: "Remera con un logo moderno y llamativo." },
    { id: 3, name: "Pantalón Jeans", category: "pantalones", price: "$40", description: "Pantalón de jeans clásico." },
    { id: 4, name: "Buzo Gris", category: "buzos", price: "$35", description: "Buzo gris de algodón, perfecto para cualquier ocasión." },
  ];

  useEffect(() => {
    // Simulamos la carga del producto usando el 'id' desde la URL
    setLoading(true);
    setTimeout(() => {
      const foundProduct = allProducts.find((product) => product.id === parseInt(id)); // Buscar el producto por id
      setProduct(foundProduct);
      setLoading(false);
    }, 1000); // Simulamos un retardo de 1 segundo
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p><strong>Precio: {product.price}</strong></p>
    </div>
  );
};

export default ItemDetailContainer;
