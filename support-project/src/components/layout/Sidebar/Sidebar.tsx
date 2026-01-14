import { TOP_ITEMS, BOTTOM_ITEMS } from "./SidebarData"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <aside
      className="
        fixed lg:static bottom-0 left-0 z-50
        w-full lg:w-24
        bg-black text-white 
        flex flex-row lg:flex-col
        lg:justify-between justify-around
        px-4 py-2 
        shadow-lg lg:shadow-none lg:my-3
      "
    >
      {/* TOP */}
     
      <div className="flex flex-row lg:flex-col items-center gap-6 ">
        {TOP_ITEMS.map((item, index) => (
          <SidebarItem key={index}  to={item.route} showOnMobile={item.showOnMobile}>{item.icon}</SidebarItem>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="flex flex-row lg:flex-col items-center gap-6 ">
        {BOTTOM_ITEMS.map((item, index) => (
          <SidebarItem key={index}  showOnMobile={item.showOnMobile}>{item.icon}</SidebarItem>
        ))}
     
      </div>
    </aside>
  )
}

export default Sidebar
