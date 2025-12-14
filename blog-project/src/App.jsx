import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Categories from "./Pages/Categories"
import About from "./Pages/About"

const App = () => {
  const [data, setData] = useState([]);

  const apiData = async () => {
    const response = await axios.get(
      "https://wordpress-1471720-5962383.cloudwaysapps.com/wp-json/custom/v1/blog/"
    );

    setData(response.data.posts);
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <div>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home data={data}/>}/>
       <Route path="/categories" element={<Categories/>}/>
        <Route path="/about" element={<About/>}/>
     </Routes>
     
    
    </div>
  );
};

export default App;
