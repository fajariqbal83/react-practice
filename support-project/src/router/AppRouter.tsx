import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllTickets from "../pages/TicketsPage/AllTickets"; 

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="bg-black h-screen overflow-hidden">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tickets" element={<AllTickets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

