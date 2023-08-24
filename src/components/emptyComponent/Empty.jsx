import React from "react";
import "./empty.css";
import deleteimg from "../../assets/images/deleteimg.png";

function Empty() {
  return (
    <>
      <div className="empty-box">
        {/* <div className="message">You don't have any task</div> */}
        <div className="trash-img">
          <img src={deleteimg} className="delete-image" alt="" />
          
        </div>
      </div>
    </>
  );
}

export default Empty;
