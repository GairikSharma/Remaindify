import React, { useCallback, useContext, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import auth from "../../firebase";
import { BsListTask } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { ReminderContext } from "../../context";
import Sidebar from "../sidebar/Sidebar";
import BasicUsage from "../modal/modal";

function Navbar() {
  const { sidebar, setShowSidebar } = useContext(ReminderContext);
  
  const showSideNav = () => {
    setShowSidebar(true);
  };

  return (
    <>
    {
      sidebar && (<Sidebar />)
    }
      <div className="navbar">
        <div className="links-and-logo">
          <div className="logo-2">
            <BsListTask />
            Task Genius
          </div>

          <div className="links">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/dashboard">
              Dashboard
            </Link>
            {/* <Link className="link" to="/profile">
              Profile
            </Link> */}
          </div>
        </div>
        <RiMenu3Line
          className="menu"
          style={{ fontSize: "24px", marginRight: "10px" }}
          onClick={showSideNav}
        />
        <div className="sign-out">
          <BasicUsage />
          <Button
            colorScheme='gray'
            color={"#427ef5"}
            onClick={() => auth.signOut()}
            mr={4}
            className="log-out-btn"
          >
            Log Out
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
