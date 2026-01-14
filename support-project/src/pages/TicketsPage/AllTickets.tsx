import AllRecentTickets from "../../tickets/AllRecentTickets"
import TicketsSidebar from "../../ticketSidebar/TicketsSidebar"


const AllTickets = () => {
  return (
    <div className="bg-white h-full mx-5 pb-2 rounded-3xl flex">
    <TicketsSidebar/>
   <div className="flex-1">
     <AllRecentTickets/>
   </div>
     </div>
    
  )
}

export default AllTickets
