import { useState } from "react";
import { initialTickets } from "../../../data/initialTicket";
import TicketsRow from "./TicketsRow";
import type { Ticket } from "../../../types/ticket.types";

const TicketsRecent = () => {
  const [recentTickets] = useState<Ticket[]>(initialTickets);
  return (
    <div className="flex flex-col">
      {recentTickets.map((ticket) => (
      <TicketsRow key={ticket.id} ticket={ticket}/>
      ))}
    </div>
  );
};

export default TicketsRecent;
