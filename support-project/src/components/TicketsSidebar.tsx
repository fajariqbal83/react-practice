import { useState } from "react";
import { Search } from "lucide-react";
import { FOLDERS, STATUSES, TICKETS, VIEWS } from "../data/ticketSidebar";
import SidebarRow from "./SidebarRow";
import { Info } from "lucide-react";

const TicketsSidebar = () => {
  const [activeId, setActiveId] = useState("open");
  return (
    <aside className="w-130 h-full border-r border-gray-300 flex flex-col ">
      <div className="flex justify-between shrink-0 items-center py-6 px-8 border-b border-gray-300">
        <div className="text-4xl font-semibold">Tickets</div>
        <button className="bg-blue-700 text-white text-3xl font-semibold py-4 px-7 rounded-2xl">
          + New ticket
        </button>
      </div>
      <div className="p-6 shrink-0">
        <div className="flex items-center gap-2  border border-gray-400 rounded-2xl px-4 py-5">
          <Search size={28} className="text-blue-700" />
          <input
            type="text"
            placeholder="Search in all tickets..."
            className="text-2xl outline-none w-full"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scroll-smooth">
        <div className="mt-5">
          {TICKETS.map((item) => (
            <div key={item.id} onClick={() => setActiveId(item.id)}>
              <SidebarRow item={item} active={activeId === item.id} />
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center justify-between pl-8 pr-5 py-2 mb-5 mt-9">
            <div className="text-2xl text-gray-500 font-semibold  ">
              TICKET VIEWS
            </div>
            <div className="text-2xl text-blue-600 font-semibold">Manage</div>
          </div>
          <div>
            {VIEWS.map((item) => (
              <div key={item.id} onClick={() => setActiveId(item.id)}>
                <SidebarRow item={item} active={activeId === item.id} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between pl-8 pr-5 py-2 mb-5 mt-9">
            <div className="text-2xl text-gray-500 font-semibold ">
              STATUSES
            </div>
            <div>
              <Info size={28} className="text-gray-700" />
            </div>
          </div>
          <div>
            {STATUSES.map((item) => (
              <div key={item.id} onClick={() => setActiveId(item.id)}>
                <SidebarRow item={item} active={activeId === item.id} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-2xl text-gray-500 font-semibold pl-8 pr-5 py-2 mb-5 mt-9">
            FOLDERS
          </div>

          <div>
            {FOLDERS.map((item) => (
              <div key={item.id} onClick={() => setActiveId(item.id)}>
                <SidebarRow item={item} active={activeId === item.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TicketsSidebar;
