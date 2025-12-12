import axios from "axios";
import { useEffect, useState } from "react";
import Posts from "./components/Posts";

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
 <Posts data={data} />
    </div>
  );
};

export default App;
