import { initialTickets } from "../../data/initialTicket";
import { useParams } from "react-router-dom";
import DetailsHeader from "../../components/pagecomponents/tickets/ticketDetails/DetailsHeader";
import DetailsBody from "../../components/pagecomponents/tickets/ticketDetails/DetailsBody";
import DetailsBodySide from "../../components/pagecomponents/tickets/ticketDetails/DetailsBodySide";

const TicketDetails = () => {
  const { id } = useParams();

  const ticket = initialTickets.find((t) => t.id === id);

  if (!ticket) {
    return <div className="p-6">Ticket not found</div>;
  }
  return (
    <div>
    
      <div className="flex h-screen">
        <div className="flex-1 border-r border-gray-200 overflow-y-auto">
          <DetailsHeader key={ticket.id} ticket={ticket} />
          <DetailsBody key={ticket.id} ticket={ticket} />
        </div>
        <div className="w-140 overflow-y-auto">
          <DetailsBodySide/>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
