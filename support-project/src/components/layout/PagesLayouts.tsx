import Sidebar from "./Sidebar/Sidebar"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

const PagesLayouts = () => {
  return (
   <div className="bg-black h-screen overflow-hidden">
      <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto bg-white rounded-3xl mx-5">
          <Outlet />
        </main>
      </div>
    </div>
   </div>
  )
}

export default PagesLayouts
