import AllRecentTickets from "../../components/pagecomponents/tickets/recentTickets/AllRecentTickets";
import TicketsSidebar from "../../components/pagecomponents/tickets/ticketSidebar/TicketsSidebar";

const AllTickets = () => {
  return (
    <div className="bg-white h-full mx-5 pb-2 rounded-3xl flex">
      <TicketsSidebar />
      <div className="flex-1">
        <AllRecentTickets />
      </div>
    </div>
  );
};

export default AllTickets;
