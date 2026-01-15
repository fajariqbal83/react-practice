import type { TicketField } from "../types/ticketFormField.type";

export const ticketFields: TicketField[] = [
  {
    name: "subject",
    label: "Subject",
    placeholder: "Enter subject",
    fullWidth: true,
  },
  {
    name: "requestername",
    label: "Requester name",
    placeholder: "Enter requester name",
  },
  {
    name: "requesteremail",
    label: "Requester email",
    placeholder: "Enter requester email address",
    type: "email",
  },
];
