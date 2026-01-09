import Navbar from "../../components/layout/Navbar"
import Sidebar from "../../components/layout/Sidebar/Sidebar"
import AllTickets from "../TicketsPage/AllTickets"


const Dashboard = () => {
  return (
    <div className="flex h-full">
  <Sidebar />
  <div className="flex-1 flex flex-col">
    <Navbar />
    <main className="flex-1 overflow-hidden">
    <AllTickets/>
    </main>
  </div>
</div>
  )
}

export default Dashboard
