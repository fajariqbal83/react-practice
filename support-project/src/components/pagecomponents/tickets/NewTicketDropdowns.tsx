import { useState } from "react";
import type { Dropdowns } from "../../../types/dropdowns.types";
import { ChevronDown, Check, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
  item: Dropdowns;
}

const NewTicketDropdowns = ({ item }: Props) => {
  const [open, setOpen] = useState(false);
const [selected, setSelected] = useState(item.value);
  const [selectedIcon, setSelectedIcon] = useState<LucideIcon | undefined>(
    item.icon,
  );
const [isAssigned, setIsAssigned] = useState(
  item.label === "Agent" && item.value !== "Unassigned"
);
  const SelectedIcon = selectedIcon;

  return (
    <div className="relative">
     
      <div className="flex justify-between mb-2 items-center">
        <span className="text-2xl font-medium">{item.label}</span>
        {item.label === "Agent" && (
  <span
    className="text-blue-600 text-lg cursor-pointer"
    onClick={() => {
      const assignedOption = item.option?.find(
        (opt) => opt.value !== "Unassigned"
      );

      if (!isAssigned && assignedOption) {
        setSelected(assignedOption.label);
        setIsAssigned(true);
      } else {
        setSelected("Unassigned");
        setIsAssigned(false);
      }
    }}
  >
    {isAssigned ? "Unassign me" : "Assign me"}
  </span>
)}

      </div>

   
      <div
        onClick={() => setOpen(!open)}
        className={`border text-2xl text-gray-700 font-light rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer
        ${open ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"}
      `}
      >
        <span className="flex items-center gap-3">
          {SelectedIcon && <SelectedIcon size={20} strokeWidth={2.5} color="#36454F" />}
          <span className="font-medium">{selected}</span>
        </span>
        <ChevronDown />
      </div>

     
      {open && item.option && (
        <div className="absolute z-10 w-full bg-white border rounded-xl mt-2 shadow-lg max-h-60 overflow-auto">
          {item.option.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setSelected(option.label);
                setIsAssigned(option.label !== "Unassigned");
                setSelectedIcon(option.icon);
                setOpen(false);
              }}
              className={`px-4 py-3 flex items-center justify-between cursor-pointer
              hover:bg-gray-100
              ${selected === option.value ? "bg-gray-200" : ""}
            `}
            >
              
              <div className="flex items-center gap-3">
              
                {option.avatarText ? (
                  <div
                    className={`w-10 h-10 flex items-center justify-center text-white font-xl bg-red-600
                    ${option.avatarType === "square" ? "rounded-md" : "rounded-full"}
                  `}
                  >
                    {option.avatarText}
                  </div>
                ) : option.avatarType === "circle" ? (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <UserRound />
                  </div>
                ) : (
                  option.icon && <option.icon size={25} />
                )}

          
                <div className="flex flex-col">
                  <span className="font-medium text-2xl">{option.label}</span>
                  {option.subLabel && (
                    <span className="text-xl text-gray-500">
                      {option.subLabel}
                    </span>
                  )}
                </div>
              </div>

           
              {selected === option.value && <Check size={22} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewTicketDropdowns;
