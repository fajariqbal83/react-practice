import { useNavigate } from "react-router-dom";
import type { Ticket } from "../../../../types/ticket.types";


import {
  ArrowLeft,
  Pencil,
  Zap,
  Archive,
  NotepadText,
  BadgeAlert,
  Trash,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


interface DetailsHeaderProps {
  ticket: Ticket;
}

const DetailsHeader = ({ ticket }: DetailsHeaderProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row gap-8 items-center p-8 border-b border-gray-300">
        <div onClick={() => navigate(-1)}>
          <ArrowLeft size={30} strokeWidth={2.25} />
        </div>
        <div className="text-4xl font-semibold flex items-center gap-3">
          <div>Step {ticket.id}:</div>
          <div>{ticket.title}</div>
        </div>
        <div>
          <Pencil size={27} strokeWidth={2.25} />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center p-8 border-b border-gray-300">
        <div className="flex flex-row gap-10">
          <div>
          <Zap  size={30} strokeWidth={2.28} />
        </div>
        <div>
          <NotepadText size={30} strokeWidth={2.28} />
        </div>
        <div>
          <Archive size={30} strokeWidth={2.28} />
        </div>
        <div>
          <BadgeAlert size={30} strokeWidth={2.28} />
        </div>
        <div>
          <Trash size={30} strokeWidth={2.28} />
        </div>
        </div>
         <div className="flex flex-row gap-10">
        <div><ChevronLeft size={30}/></div>
        <div><ChevronRight size={30}/></div>
      </div>
      </div>

    
    </div>
  );
};

export default DetailsHeader;
