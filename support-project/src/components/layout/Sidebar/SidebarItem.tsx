type SidebarItemProps = {
  children: React.ReactNode
  showOnMobile?: boolean
}

const SidebarItem = ({ children, showOnMobile }: SidebarItemProps) => {
  return (
    <div
      className={`w-20 h-20 p-4 flex items-center justify-center rounded-2xl hover:bg-gray-800 cursor-pointer  ${
        showOnMobile ? "" : "hidden lg:flex"
      }`}
    >
      {children}
    </div>
  )
}

export default SidebarItem


