import { MoveLeft } from "lucide-react";
import { ticketFields } from "../../../data/ticketsFields";
import { Plus, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewTicketsInfo = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className="cursor-pointer">
      <div className="flex flex-row gap-6 items-center p-8 border-b border-gray-300">
        <div>
          <MoveLeft size={28} strokeWidth={3} color="#0a0a0a" />
        </div>
        <div className="text-4xl font-medium"> New ticket</div>
      </div>

      <div className="px-[20%]">
        <div className="grid grid-cols-2 gap-10 pt-20">
          {ticketFields.map((field) => (
            <div
              key={field.name}
              className={field.fullWidth ? "col-span-2" : ""}
            >
              <div className="mb-2 text-2xl font-medium">{field.label}</div>
              <input
                type={field.type || "text"}
                placeholder={field.placeholder}
                className="w-full text-2xl border border-gray-300 p-3 rounded-md"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-3 items-center my-9">
          <div>
            <Plus size={28} color="#3287f5" strokeWidth={3} />
          </div>
          <div className="text-blue-500 text-2xl font-medium">
            Add people to the loop
          </div>

          <div>
            <Info size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTicketsInfo;
