import { useNavigate } from "react-router-dom";

const collections = [
  { key: "electronics", title: "Electronics", image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png" },
  { key: "jewelery", title: "Jewelery", image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png" },
  { key: "men's clothing", title: "Men's Clothing", image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png" },
  { key: "women's clothing", title: "Women's Clothing", image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png" },
];

const Collections = () => {
  const navigate = useNavigate();

  return (
    <div className="p-24">
      <div className=" text-4xl font-semibold text-center mb-5">Shop Collections</div>

      <div
      className="grid grid-cols-4 gap-4"
      >
        {collections.map((c) => (
          <div
            key={c.key}
            onClick={() => navigate(`/products?category=${encodeURIComponent(c.key)}`)}
            className="cursor-pointer overflow-hidden border-2"
          
          >
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-90 object-cover "

             
            />
            <div
            className="bg-black text-white px-6 py-5 font-semibold"
            >
              {c.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;