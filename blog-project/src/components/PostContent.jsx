import { useEffect, useState } from "react";
import axios from "axios";

const PostContent = () => {
  const [content, setContent] = useState([]);

  const contentData = async () => {
    const response = await axios.get(
      "https://wordpress-1471720-5962383.cloudwaysapps.com/wp-json/custom/v1/blog/72/"
    );
    console.log(response);
    setContent(response.content);
  };

  useEffect(() => {
    contentData();
  }, []);

  return (
    <div>
      <button>click</button>
    </div>
  );
};

export default PostContent;
