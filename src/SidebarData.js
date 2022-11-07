import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DescriptionIcon from "@mui/icons-material/Description";
import AddCardIcon from "@mui/icons-material/AddCard";
import { NavLink } from "react-router-dom";
export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon/>,
    link: <NavLink to="/home"></NavLink>,

  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Reports",
    icon: <AssessmentIcon />,
    link: "/reports",
  },
  {
    title: "Invoices",
    icon: <DescriptionIcon />,
    link: "/invoices",
  },
  {
    title: "Bills",
    icon: <AddCardIcon />,
    link: "/bills",
  },
];
