import type { initialTicketDetails } from "../../../../../../types/ticketsDetails";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CustomFields = ({ ticket }: { ticket: initialTicketDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div  className={`border-b border-gray-300`}>
      <div
        className="flex flex-row items-center justify-between cursor-pointer p-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-2xl font-semibold">Custom fields</div>
        <div
          className={`transition-transform duration-200 ease-in-out ${isOpen ? "rotate-180" : ""}`}
        >
          <ChevronDown size={30} />
        </div>
      </div>

      {isOpen && (
        <div>
          {ticket.custom?.map((item, index) => {
            let className = "";

            if (index === 0) {
              className = "text-xl font-semibold text-gray-800";
            } else if (index === 1) {
              className = "text-xl text-gray-500";
            } else if (index === 2) {
              className =
                "mt-3 text-xl pb-8 font-medium text-blue-600 cursor-pointer hover:underline";
            }

            return (
              <div key={index} className={className}>
                <div className="text-center px-8">{item}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomFields;
