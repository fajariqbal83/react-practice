import Navbar from "../../components/layout/Navbar"
import Sidebar from "../../components/layout/Sidebar/Sidebar"


const Dashboard = () => {
  return (
    <div className="flex h-full">
  <Sidebar />
  <div className="flex-1 flex flex-col">
    <Navbar />
    <main className="flex-1 overflow-hidden">
      {/* page content */}
    </main>
  </div>
</div>
  )
}

export default Dashboard
