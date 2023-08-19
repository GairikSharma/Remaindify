import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { TfiClose } from "react-icons/tfi";
import { ReminderContext } from "../../context";

function Sidebar() {
  const { setShowSidebar } = useContext(ReminderContext);
  const hideSideNav = () => {
    setShowSidebar(false);
  };
  return (
    <>
      <div className="sidebar-container">
        <TfiClose className="close-icon" onClick={hideSideNav} />
        <div className="sidenav-links">
          <Link className="" to="/" onClick={hideSideNav}>
            Home
          </Link>
          <Link className="" to="/dashboard" onClick={hideSideNav}>
            Dashboard
          </Link>
          <Link className="" to="/profile" onClick={hideSideNav}>
            Profile
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
