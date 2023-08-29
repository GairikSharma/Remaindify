import React from "react";
import "./loader.css";
import { Spinner } from '@chakra-ui/react'

function Loader() {
  return (
    <>
      <div className="loader-body">
        <Spinner size='xl' width={100} height={100} color="#427ef5"/>
      </div>
    </>
  );
}

export default Loader;
