import { useParams } from "react-router-dom";
import { initialTicketDetails } from "../../../../../data/initialTicketDetails";
import { Ellipsis } from "lucide-react";

import TicketInfo from "./detailBComponents/TicketInfo";
import TicketAddTags from "./detailBComponents/TicketAddTags";
import CustomFields from "./detailBComponents/CustomFields";
const DetailsBodySide = () => {
  
  const { id } = useParams();

  const ticket = initialTicketDetails.find((t) => t.id === id);

  if (!ticket) {
    return <div className="p-4 text-red-500">Ticket not found</div>;
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between p-8 border-b border-gray-300">
        <div className="text-4xl font-semibold">Details</div>
        <div>
          <Ellipsis size={35} />
        </div>
      </div>
    <TicketInfo key={ticket.id} ticket={ticket}/>
    <TicketAddTags />
    <CustomFields key={ticket.id} ticket={ticket}/>
    </div>
  );
};

export default DetailsBodySide;
