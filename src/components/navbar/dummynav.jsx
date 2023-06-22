import React from "react";
import "./navbar.css";
import { Button, Box } from "@chakra-ui/react";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import auth from "../../firebase";

function DummyNav() {
  const [showbtn, setShowbtn] = React.useState(false);
  const showbutton = () => {
    setShowbtn(true);
  };
  const singnInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
      <Box className="_dummynav" __css={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "64px"
      }}>
        <div className="logo">Task Genius</div>
        <div className="dummynavsignin">
          <Button colorScheme="teal" variant="outline" onClick={showbutton}>
            + Sign in
          </Button>
        </div>
      </Box>
      {showbtn && (
        <div className="google-sign-up">
          <Button colorScheme="gray" onClick={singnInWithGoogle}>
            Sign In with Google
          </Button>
        </div>
      )}
    </>
  );
}

export default DummyNav;
