import { ArrowDown, Dot, ArrowUp, ChevronsUp } from "lucide-react";

export const dropdowns = [
  {
    label: "Team",
    value: "Support Heroes",
  },
  {
    label: "Agent",
    value: "Unassigned",
    actionText: "Assign me",
  },
  {
    label: "Priority",
    value: "Medium",
    options: [
      { label: "Low", value: "Low", icon: ArrowDown },
      { label: "Medium", value: "Medium", icon: Dot },
      { label: "High", value: "High", icon: ArrowUp },
      { label: "Urgent", value: "Urgent", icon: ChevronsUp },
    ],
  },
  {
    label: "Status",
    value: "Pending",
    options: [
      { label: "Open", value: "Open" },
      { label: "Pending", value: "Pending" },
      { label: "Onhold", value: "Onhold" },
      { label: "Solved", value: "Solved" },
      { label: "Closed", value: "Closed" },
    ],
  },
];
