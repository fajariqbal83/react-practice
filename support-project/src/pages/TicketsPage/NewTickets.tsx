import AddTags from "../../components/pagecomponents/tickets/newTickets/AddTags";
import NewTicketDropdowns from "../../components/pagecomponents/tickets/newTickets/NewTicketDropdowns";
import NewTicketsInfo from "../../components/pagecomponents/tickets/newTickets/NewTicketsInfo";
import NewMessageBox from "../../components/pagecomponents/tickets/newTickets/NewMessageBox"
import { dropdowns } from "../../data/dropdowns";



const NewTickets = () => {
  
  return (
    <div>
      <div>
        <NewTicketsInfo />
      </div>

      <div className="px-[20%]">
        <div className="grid grid-cols-1 gap-10 pt-8">
          {dropdowns.map((item) => (
            <NewTicketDropdowns key={item.label} item={item} />
          ))}
        </div>
      </div>

      <div className="px-[20%] my-8">
        <AddTags/>
      </div>

      <div className="px-[20%] pb-8">
       <NewMessageBox/>
      </div>

     
    </div>
  );
};

export default NewTickets;
