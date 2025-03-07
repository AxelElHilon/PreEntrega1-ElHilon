import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Usamos Link para crear los enlaces
import './ItemListContainer.css';
const ItemListContainer = ({ greeting }) => {
  const { id: categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const allProducts = [
    { id: 1, name: "Remera Básica", category: "remeras", price: "$20" },
    { id: 2, name: "Remera con Logo", category: "remeras", price: "$25" },
    { id: 3, name: "Pantalón Jeans", category: "pantalones", price: "$40" },
    { id: 4, name: "Buzo Gris", category: "buzos", price: "$35" },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const filteredProducts = categoryId
        ? allProducts.filter((product) => product.category === categoryId)
        : allProducts;

      setProducts(filteredProducts);
      setLoading(false);
    }, 1000);
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              {/* Enlazamos a los detalles del producto */}
              <Link to={`/item/${product.id}`}>
                <button>Ver Detalle</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No se encontraron productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
