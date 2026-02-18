import { ChevronDown } from "lucide-react";
import { useState } from "react";

import AddTags from "../../../newTickets/AddTags";

const TicketAddTags = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-gray-300`}>
      <div
        className="flex flex-row items-center justify-between cursor-pointer p-8 
        "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-2xl font-semibold">Tags</div>

        <div
          className={`transition-transform duration-200 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={30} />
        </div>
      </div>

      {isOpen && (
        <div className="px-4 pb-4">
          <AddTags />
        </div>
      )}
    </div>
  );
};

export default TicketAddTags;
