import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllTickets from "../pages/TicketsPage/AllTickets"; 
import NewTickets from "../pages/TicketsPage/NewTickets"
import PagesLayouts from "../components/layout/PagesLayouts";

const AppRouter = () => {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route element={<PagesLayouts/>}>
<Route path="/" element={<Dashboard />} />
          <Route path="/tickets" element={<AllTickets />} />
          <Route path="/tickets/new" element={<NewTickets/>}/>
          </Route>
          
        </Routes>
     
    </BrowserRouter>
  );
};

export default AppRouter;

