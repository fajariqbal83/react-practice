import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "jodit/es2021/jodit.min.css";


const NewMessageBox = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    placeholder: "Enter message",
    minHeight: 400,
    width: "100%",
    style: {
      fontSize: "20px",
    },
  };

  return (
    <div className="w-full">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
        onChange={() => {}}
      />
    </div>
  );
};

export default NewMessageBox;
