import React from "react";
import "./addtask.css";
import BasicUsage from "../modal/modal";
import addtask from "../../assets/images/addtask.jpg";

function AddTask() {
  return (
    <>
      <div className="addtask-wrapper">
        <div className="addtask">
          <img className="add-task-img" src={addtask} alt="" />
          <div className="add-task-title">You hevn't added anything</div>
          <div className="instruction">
            <div className="ins-title">
              {" "}
              What do you need to get done today?
            </div>
            Click + to add a task
          </div>
          <BasicUsage />
        </div>
      </div>
    </>
  );
}

export default AddTask;
