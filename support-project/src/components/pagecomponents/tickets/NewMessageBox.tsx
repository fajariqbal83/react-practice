import { useState } from "react";

const MessageBox = () => {
  const [message, setMessage] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  return (
    <div className="border rounded-2xl border-gray-300 bg-white p-4 mt-6">

  
      <textarea
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`w-full h-40 resize-none text-2xl outline-none
          ${bold ? "font-bold" : ""}
          ${italic ? "italic" : ""}
          ${underline ? "underline" : ""}
        `}
      />

     
      <div className="mt-3 flex gap-4 bg-gray-80 px-4 py-2 rounded-xl shadow-lg">
        <button onClick={() => setBold(!bold)} className={bold ? "bg-blue-100 px-2 rounded text-xl font-bold" : "text-xl font-bold"}>B</button>
        <button onClick={() => setItalic(!italic)} className={italic ? "bg-blue-100 px-2 rounded text-xl font-bold italic" : "text-xl font-bold italic"}>I</button>
        <button onClick={() => setUnderline(!underline)} className={underline ? "bg-blue-100 px-2 rounded text-xl font-bold underline" : "text-xl font-bold underline"}>U</button>
      </div>

 
      <div className="mt-4 flex justify-end">
        <button
          disabled={!message.trim()}
          className={`px-6 py-2 text-2xl rounded-lg text-white
            ${message.trim() ? "bg-blue-600" : "bg-gray-300"}
          `}
        >
          Submit
        </button>
      </div>

    </div>
  );
};

export default MessageBox;
