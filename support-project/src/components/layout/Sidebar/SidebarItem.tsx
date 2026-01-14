import { useNavigate } from "react-router-dom";

type SidebarItemProps = {
  children: React.ReactNode;
  showOnMobile?: boolean;
  to?: string;
};

const SidebarItem = ({ children, showOnMobile, to }: SidebarItemProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => to && navigate(to)}
      className={`w-20 h-20 p-4 flex items-center justify-center rounded-2xl hover:bg-gray-800 cursor-pointer  ${
        showOnMobile ? "" : "hidden lg:flex"
      }`}
    >
      {children}
    </div>
  );
};

export default SidebarItem;
