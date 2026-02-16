export interface Ticket {
  id: string;
  step:string;
  requester: string;
  requestermail: string;
  title: string;
  status: string;
  agent: string;
  date: string;
  day: string;
  time: string;
  messages: string[];
}
