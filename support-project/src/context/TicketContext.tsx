import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { initialTickets } from "../data/initialTicket";
import type { Ticket } from "../types/ticket.types";


export const TicketsContext = createContext<any>(null);

export const TicketsProvider = ({ children }: { children: ReactNode }) => {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);

  return (
    <TicketsContext.Provider value={{ tickets, setTickets }}>
      {children}
    </TicketsContext.Provider>
  );
};
