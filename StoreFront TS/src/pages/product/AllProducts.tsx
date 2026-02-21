import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/product.api";
import type { product } from "../../types/product";
import Collections from "../../components/Collections";

const AllProducts = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .catch((err) => setError(err.message));
  }, []);

    const grouped = products.reduce<Record<string, product[]>>((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
   <div>
    <Collections/>
      <h1>Products by Category</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} style={{ marginBottom: 24 }}>
          <h2 style={{ textTransform: "capitalize" }}>{category}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: 50,
            }}
          >
            {items.map((p) => (
              <div
                key={p.id}
                style={{ border: "1px solid #eee", padding: 10 }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: "100%", height: 120, objectFit: "contain" }}
                />
                <h4 style={{ fontSize: 14 }}>{p.title}</h4>
                <p>${p.price}</p>
                <div>{p.image}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;