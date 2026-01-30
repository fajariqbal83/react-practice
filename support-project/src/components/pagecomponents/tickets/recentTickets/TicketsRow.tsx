import { useNavigate } from "react-router-dom";
import type { Ticket } from "../../../../types/ticket.types";
import { Dot, Ellipsis } from "lucide-react";

interface TicketsRowProps {
  ticket: Ticket;
}

const TicketsRow = ({ ticket }: TicketsRowProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/tickets/${ticket.id}`)}
      className="grid grid-cols-[0.1fr_1fr_1fr_0.5fr_0.5fr_1fr_0.2fr]
    items-center px-4 py-4 text-xl border-b border-gray-300"
    >
      <input type="checkbox" className="w-5 h-5 accent-blue-600" />

      <div className="flex flex-row gap-4 items-center">
        <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-medium">
          H
        </div>
        <div>
          <div className="font-medium text-gray-700">{ticket.requester}</div>
          <div className="text-gray-500">{ticket.requestermail}</div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div>
          <Dot size={20} color="#8c8c8c" strokeWidth={10} />
        </div>
        <div className="flex flex-row ">
          <div className="text-1xl font-medium text-gray-700">
            Step {ticket.id}:
          </div>
          <div
            className="text-1xl font-medium text-gray-700 truncate max-w-35
"
          >
            {ticket.title}
          </div>
        </div>
      </div>

      <div className="font-medium text-gray-700">{ticket.agent}</div>

      <div className="text-blue-800 bg-sky-100 w-17 h-9 flex items-center font-medium rounded-xl p-2">
        {ticket.status}
      </div>

      <div className="font-medium text-gray-700">{ticket.date}</div>

      <div>
        <Ellipsis size={25} color="#0a0a0a" />
      </div>
    </div>
  );
};

export default TicketsRow;
