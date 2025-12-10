import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const apiData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(response.data);
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <div>
      {console.log(data)}
      {data.map((post) => (
        <p key={post.id}>{post.name}</p>
      ))}
    </div>
  );
};

export default App;
