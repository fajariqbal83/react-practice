import type { Ticket } from "../../../../types/ticket.types";

const DetailsBody = ({ ticket }: { ticket: Ticket }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <div>{ticket.requester}</div>
      </div>
      <div className="flex flex-row items-center ">
        <div>{ticket.day},</div>
        <div>{ticket.date},</div>
        <div>{ticket.time}</div>
      </div>
    </div>
  );
};

export default DetailsBody;
