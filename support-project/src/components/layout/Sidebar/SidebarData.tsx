import AgentIcon from "./SidebarIcons/AgentIcon";
import AnalyticsIcon from "./SidebarIcons/AnalyticsIcon";
import BellIcon from "./SidebarIcons/BellIcon";
import CategoryIcon from "./SidebarIcons/CategoryIcon";
import PowerIcon from "./SidebarIcons/PowerIcon";
import SettingIcon from "./SidebarIcons/SettingIcon";
import TicketsIcon from "./SidebarIcons/TicketsIcon";
import SupportLogo from "./SidebarIcons/SupportLogo";
import type { SidebarItemData } from "../../../types/SidebarData.type";
import ProfileIcon from "./SidebarIcons/ProfileIcon";

export const TOP_ITEMS: SidebarItemData[] = [
  { icon: <SupportLogo />, showOnMobile: false },
  { icon: <TicketsIcon />,    route: "/tickets", showOnMobile: true },
  { icon: <AgentIcon />, showOnMobile: true },
  { icon: <AnalyticsIcon />, showOnMobile: false },
  { icon: <PowerIcon />, showOnMobile: false },
  { icon: <CategoryIcon />, showOnMobile: false },
];

export const BOTTOM_ITEMS: SidebarItemData[] = [
  { icon: <SettingIcon />, showOnMobile: true },
  { icon: <BellIcon />, showOnMobile: true },
  { icon: <ProfileIcon />, showOnMobile: false },
];
