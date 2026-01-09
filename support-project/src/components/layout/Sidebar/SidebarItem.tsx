type SidebarItemProps = {
  children: React.ReactNode
  showOnMobile?: boolean
}

const SidebarItem = ({ children, showOnMobile }: SidebarItemProps) => {
  return (
    <div
      className={`w-14 h-14 flex items-center justify-center rounded-2xl hover:bg-gray-900 cursor-pointer ${
        showOnMobile ? "" : "hidden lg:flex"
      }`}
    >
      {children}
    </div>
  )
}

export default SidebarItem


