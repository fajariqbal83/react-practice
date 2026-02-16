import type { Ticket } from "../../../../types/ticket.types";

const DetailsBody = ({ ticket }: { ticket: Ticket }) => {
  return (
    <div className="mx-36 ">
      
      <div className="mt-4 rounded-2xl  border border-gray-300 h-full flex flex-col">

      
        <div className="bg-gray-200 shrink-0">
          <div className="flex flex-row items-center justify-between p-5">
            <div>
              <div className="text-2xl font-medium">{ticket.requester}</div>
            </div>
            <div className="flex flex-row items-center text-xl gap-1">
              <div>{ticket.day},</div>
              <div>{ticket.date},</div>
              <div>{ticket.time}</div>
            </div>
          </div>
        </div>

       
        <div className="p-5 bg-white">
          {ticket.messages.map((msg, index) => (
            <p key={index} className="mb-6 text-xl font-sans">
              {msg}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DetailsBody;
