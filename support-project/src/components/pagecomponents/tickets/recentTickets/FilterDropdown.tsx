import { filters } from "../../../../data/filtersDropdown";

interface FilterDropdownProps {
  open: boolean;
}

const FilterDropdown = ({ open }: FilterDropdownProps) => {
  if (!open) return null;

  return (
    <div className="absolute top-22 left-5 w-72 bg-white border rounded-xl shadow-lg z-50">
      <ul>
        {filters.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
          >
            <Icon size={22} className="text-gray-600" />
            <span className="text-xl">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterDropdown;
