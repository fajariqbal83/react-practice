import { initialTickets } from "../../data/initialTicket";
import { useParams } from "react-router-dom";
import DetailsHeader from "../../components/pagecomponents/tickets/ticketDetails/DetailsHeader";
import DetailsBody from "../../components/pagecomponents/tickets/ticketDetails/DetailsBody";
import DetailsBodySide from "../../components/pagecomponents/tickets/ticketDetails/detailBodySidbar/DetailsBodySide";
import NewMessageBox from "../../components/pagecomponents/tickets/newTickets/NewMessageBox";

const TicketDetails = () => {
  const { id } = useParams();

  const ticket = initialTickets.find((t) => t.id === id);

  if (!ticket) {
    return <div className="p-6">Ticket not found</div>;
  }
  return (
    <div>
    
      <div className="flex h-screen max-h-screen overflow-hidden">
        <div className="flex-1 border-r border-gray-200 flex flex-col overflow-hidden">
         <div className="shrink-0">
           <DetailsHeader key={ticket.id} ticket={ticket} />
         </div>
          <div className="flex-1 overflow-y-auto">
            <DetailsBody key={ticket.id} ticket={ticket} />
          </div>
        <div className=" shrink-0 border-t  mx-30 mt-3">
            <NewMessageBox/>
        </div>
        </div>
        <div className="w-140 h-screen max-h-screen overflow-y-auto overflow-x-hidden border-l border-gray-200">
          <DetailsBodySide/>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
