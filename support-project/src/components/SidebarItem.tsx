
type SidebarItemProps = {
  children: React.ReactNode
  hidden?: boolean
}

const SidebarItem = ({ children, hidden }: SidebarItemProps) => {
  return (
    <div
      className={`w-14 h-14 flex items-center justify-center rounded-2xl hover:bg-gray-900 cursor-pointer ${
        hidden ? "hidden" : ""
      }`}
    >
      {children}
    </div>
  )
}
