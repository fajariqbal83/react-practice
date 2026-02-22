import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/product.api";
import type { product } from "../../types/product";


const AllProducts = () => {
  const [products, setProducts] = useState<product[]>([]);
 

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        console.log("API products:", data); 
        setProducts(data);                
      })
      .catch((err) => console.error(err));
  }, []);
   

  return (
   <div>
    {products.map((p) => (
      <div>{p.image}</div>
    ))}
    </div>
  );
};

export default AllProducts;