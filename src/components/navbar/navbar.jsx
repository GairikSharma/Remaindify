import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";

import { singnInWithGoogle } from "../../firebase";
import auth from "../../firebase";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Text>Task Genius</Text>
        </div>

        <div className="links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/dashboard">
            Dashboard
          </Link>
          <Link className="link" to="/profile">
            Profile
          </Link>
        </div>
        <div className="sign-in">
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
