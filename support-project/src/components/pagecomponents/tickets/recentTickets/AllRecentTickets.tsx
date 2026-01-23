import { Plus } from "lucide-react";
import { useState } from "react";
import { initialTickets } from "../../../../data/initialTicket";
import TicketsRecent from "./TicketsRecent";
import TicketsHeader from "./TicketsHeader";
import FilterDropdown from "./FilterDropdown";
const AllRecentTickets = () => {
  const [totalTicket] = useState(initialTickets);
    const [open, setOpen] = useState<boolean>(false);
  
  return (
    <div>
      <div className="px-5 py-9.5 border-b border-gray-300">
        <div className="text-4xl font-semibold">All recent tickets</div>
      </div>

      <div className=" relative px-5 py-5 border-b border-gray-300">
        <button 
        onClick={() => setOpen((prev) => !prev)}
        className="bg-white border border-gray-300 text-black text-2xl font-semibold py-4 px-6 rounded-2xl flex flex-row gap-2 items-center">
          <Plus size={30} strokeWidth={2} /> <span>Add filter</span>
        </button>
        <FilterDropdown open={open}/>
      </div>

      <div className="px-3 py-3 border-b border-gray-300 text-xl text-gray-600">{totalTicket.length} tickets</div>

      <div>
        <TicketsHeader/>
      </div>

      <div>
        <TicketsRecent/>
      </div>

    </div>
  );
};

export default AllRecentTickets;
