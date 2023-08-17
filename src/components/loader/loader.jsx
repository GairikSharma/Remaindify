import React from "react";
import "./loader.css";
import { Spinner } from '@chakra-ui/react'

function Loader() {
  return (
    <>
      <div className="loader-body">
        {/* <div class="custom-loader"></div> */}
        <Spinner size='xl' width={100} height={100}/>
      </div>
    </>
  );
}

export default Loader;
