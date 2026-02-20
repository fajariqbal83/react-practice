import { useEffect, useState } from "react";
import { fetchProducts } from "./Api/productApi";
import type { Product } from "./Types/products";


const App = () => {
    const [products, setProducts] = useState<Product[]>([]);
   
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        console.log("API Data (inside component):", data); 
        setProducts(data);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("API call fail ho gayi");
      });
  }, []);
  
  return (
    <div>
         <h2>Products</h2>

      
      {error && <p style={{ color: "red" }}>{error}</p>}

    
      {products.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Rs: {item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default App
