import type { SidebarTicketItem } from "../types/ticketsidebar.types";

export const TICKETS: SidebarTicketItem[] = [
  { id: "recent-tickets",  route: "/tickets", label: "All recent tickets" },
  { id: "handle-tickets", label: "Tickets to handle", count: 4 },
  { id: "open-tickets", label: "My open tickets", count: 0 },
];

export const VIEWS: SidebarTicketItem[] = [
  { id: "views", label: "My tickets (7 days)", count: 0 },
];

export const STATUSES: SidebarTicketItem[] = [
  { id: "open", label: "Open", count: 4 },
  { id: "pending", label: "Pending", count: 0 },
  { id: "on-hold", label: "On hold", count: 0 },
  { id: "solved", label: "Solved" },
  { id: "closed", label: "Closed" },
];

export const FOLDERS: SidebarTicketItem[] = [
  { id: "archive", label: "Archive" },
  { id: "spam", label: "Spam" },
  { id: "trash", label: "Trash" },
];
