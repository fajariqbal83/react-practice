import { useState } from "react";
import { ChevronDown, Link, CircleAlert } from "lucide-react";
import type { initialTicketDetails } from "../../../../../types/ticketsDetails";

const TicketInfo = ({ ticket }: { ticket: initialTicketDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("Open");
  return (
    <div>
      <div
        className={`flex flex-row items-center justify-between cursor-pointer p-8
    ${!isOpen ? "border-b border-gray-300" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-2xl font-semibold">Ticket info </div>
        <div
          className={`transition-transform duration-200 ease-in-out ${isOpen ? "rotate-180" : ""}`}
        >
          <ChevronDown size={30} />
        </div>
      </div>
      {isOpen && (
        <div className=" px-8 pb-8 border-b border-gray-300">
          <div className="text-xl mb-5 text-gray-600 font-medium flex items-center gap-2 whitespace-nowrap">
            Ticket ID:
            <span className="text-black font-medium flex items-center gap-2">
              {ticket.id}
              <Link size={20} color="#70a0ff" />
            </span>
          </div>

          <div className="text-xl mb-5 text-gray-600 font-medium">
            Created:{" "}
            <span className="text-black font-medium">{ticket.created}</span>
          </div>
          <div className="text-xl mb-5 text-gray-600 font-medium">
            Last Message:{" "}
            <span className="text-black font-medium">{ticket.lastmessage}</span>
          </div>

          <div className=" flex flex-row items-center gap-2 mb-5">
            <div className="text-xl text-gray-600 font-medium">Status:</div>
            <div>
             <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border rounded-xl p-1 border-gray-300 text-black font-medium text-xl"
              >
                {ticket.status.map((item) => (
                  <option key={item} value={item} className="text-black font-medium">
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-xl mb-5 text-gray-600 font-medium flex items-center gap-2">
            Rating:{" "}
            <span className="text-black font-medium flex items-center gap-2">
              {ticket.rating} <CircleAlert size={20} color="#050505" />
            </span>
          </div>
           <div className=" flex flex-row items-center gap-2 mb-5">
            <div className="text-xl text-gray-600 font-medium">Priority:</div>
            <div>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border rounded-xl p-1 border-gray-300 text-black font-medium text-xl"
              >
                {ticket.priority.map((item) => (
                  <option key={item} value={item} className="text-black font-medium">
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-xl mb-5 text-gray-600 font-medium">
            Source:{" "}
            <span className="text-black font-medium">{ticket.source}</span>
          </div>
          <div className="text-xl mb-5 text-gray-600 font-medium">
            Language:{" "}
            <span className="text-black font-medium">{ticket.language}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketInfo;
