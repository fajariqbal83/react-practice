import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/product.api";
import type { product } from "../../types/product";

const AllProducts = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {error && <p>{error}</p>}

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <div>{p.category}</div>
          <p>{p.price}</p>
          <img src={p.image} alt={p.title} />
        </div>
      ))}
    </div>
  );
};

export default AllProducts;