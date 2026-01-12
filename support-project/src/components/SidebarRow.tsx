import type { SidebarTicketItem } from "../types/ticketsidebar.types";

interface Props {
  item: SidebarTicketItem;
  active?: boolean;
}

const SidebarRow = ({ item, active }: Props) => {
  return (
    <div
      className={`flex justify-between items-center pr-5 pl-8 py-2 rounded-md cursor-pointer mb-6
        ${active ? "bg-gray-100 font-medium" : "hover:bg-gray-50"}
      `}
    >
      <span className="text-2xl text-gray-500 hover:text-blue-600 font-semibold">
        {item.label}
      </span>

      {item.count !== undefined && (
        <span className="text-xl bg-gray-200 text-gray-600 rounded-full px-3 py-1">
          {item.count}
        </span>
      )}
    </div>
  );
};

export default SidebarRow;
