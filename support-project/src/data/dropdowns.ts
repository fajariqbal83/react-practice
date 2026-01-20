import { ArrowDown, Circle , ArrowUp, ChevronsUp } from "lucide-react";

export const dropdowns = [
  {
    label: "Team",
    value: "Select team",
    option: [
      {
        label: "Support Heros",
        value: "Support Heroes",
        subLabel: "1862452407@tickets.helpdesk.com",
        avatarText: "SH",
        avatarType: "square",
      },
    ],
  },
  {
    label: "Agent",
    value: "Unassigned",
    actionText: "Assign me",
    option: [
      { label: "Unassigned", 
        value: "Unassigned", 
        avatarType: "circle" 
      },
      {
        label: "Mairan Anjum (You)",
        value: "Mairan Anjum",
        subLabel: "mairananjum149@gmail.com",
        avatarType: "circle",
      },
    ],
  },
  {
    label: "Priority",
    value: "Medium",
    icon: Circle,
    option: [
      { label: "Low", value: "Low", icon: ArrowDown },
      { label: "Medium", value: "Medium", icon: Circle },
      { label: "High", value: "High", icon: ArrowUp },
      { label: "Urgent", value: "Urgent", icon: ChevronsUp },
    ],
  },
  {
    label: "Status",
    value: "Pending",
    option: [
      { label: "Open", value: "Open" },
      { label: "Pending", value: "Pending" },
      { label: "Onhold", value: "Onhold" },
      { label: "Solved", value: "Solved" },
      { label: "Closed", value: "Closed" },
    ],
  },
];
