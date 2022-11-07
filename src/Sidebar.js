import React from "react";
import { SidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";
import "./App.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        {SidebarData.map((val, key) => {
          return (
            <>
              <li
                key={key}
                className="row"
                id={window.location.pathname === val.link ? "active" : ""}
                // onClick={() => {
                //   window.location.pathname = val.link;
                // }}
              >
                <NavLink to={val.link}>
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </NavLink>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
