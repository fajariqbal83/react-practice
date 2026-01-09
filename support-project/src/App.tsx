import { TicketsProvider } from "./context/TicketContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <TicketsProvider>
      <AppRouter />
    </TicketsProvider>
  );
};

export default App;
