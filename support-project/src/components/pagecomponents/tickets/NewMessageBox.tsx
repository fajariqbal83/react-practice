import { useState } from "react";

const MessageBox = () => {
  const [message, setMessage] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  return (
    <div className="border rounded-2xl bg-white p-4 mt-6">

      {/* TEXT AREA */}
      <textarea
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`w-full h-40 resize-none outline-none
          ${bold ? "font-bold" : ""}
          ${italic ? "italic" : ""}
          ${underline ? "underline" : ""}
        `}
      />

      {/* TOOLBAR */}
      <div className="mt-3 flex gap-4 bg-gray-50 px-4 py-2 rounded-xl shadow-sm">
        <button onClick={() => setBold(!bold)} className={bold ? "bg-blue-100 px-2 rounded" : ""}>B</button>
        <button onClick={() => setItalic(!italic)} className={italic ? "bg-blue-100 px-2 rounded" : ""}>I</button>
        <button onClick={() => setUnderline(!underline)} className={underline ? "bg-blue-100 px-2 rounded" : ""}>U</button>
      </div>

      {/* BOTTOM */}
      <div className="mt-4 flex justify-end">
        <button
          disabled={!message.trim()}
          className={`px-6 py-2 rounded-lg text-white
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
