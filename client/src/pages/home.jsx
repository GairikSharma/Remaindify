import React, { useContext, useEffect, useState } from "react";
import "../styles/home.css";
import "../components/TaskCard/taskcard.css";
import { Card, CardBody, Text, Box, Button } from "@chakra-ui/react";
import BasicUsage from "../components/modal/modal";

import { db } from "../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ReminderContext } from "../context";
import auth from "../firebase";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FiMoreVertical } from "react-icons/fi";
import AddTask from "../components/AddTaskComponent/AddTask";

function Home() {
  const [disable, setDisable] = useState(false);

  const { alltask, deletetask, setDeleteTask } = useContext(ReminderContext);
  const completedArr = [
    {
      title: "",
      description: "",
    },
  ];
  {
    alltask.map((complete) => {
      if (complete.email === auth.currentUser.email) {
        completedArr.push(complete.title, complete.description);
      }
    });
  }

  const markAsDone = async (status, id) => {
    const markDoneTask = doc(db, "reminders", id);
    const updateState = { status: 1 };
    await updateDoc(markDoneTask, updateState);
    setDeleteTask(true);
    if (updateDoc) {
      setDisable(true);
    }
    window.location.reload(true);
  };

  const deleteTask = async (id) => {
    try {
      const userTask = doc(db, "reminders", id);
      await deleteDoc(userTask);

      console.log("Deleted task");
      setDeleteTask(deletetask + 1);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  const currentUserData = [];
  {
    alltask.map((t) => {
      if (t.email === auth.currentUser.email) {
        currentUserData.push(t.title);
      }
    });
  }

  //format date
  function formatDate(dateString) {
    const options = { day: "numeric", month: "long" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  }

  //format time
  function formatTime(dateString) {
    const options = { hour: "numeric", minute: "numeric" };
    const formattedTime = new Date(dateString).toLocaleTimeString(
      undefined,
      options
    );
    return formattedTime;
  }
  return (
    <>
      <div className="tasks">
        {alltask.map((t) => {
          if (t.email === auth.currentUser.email) {
            return (
              <div className="card-body">
                <div className="Title-more-btn">
                  <div
                    className={t.status ? "task-title-diasable" : "task-title"}
                  >
                    {t.title}
                  </div>
                  <FiMoreVertical className="more-btn" />
                </div>
                <div
                  className={
                    t.status ? "task-description-disable" : "task-description"
                  }
                >
                  {t.description}
                </div>
                {t.status ? (
                  <div className="due-date">
                    <div className="done">Done</div>
                  </div>
                ) : (
                  <div className="due-date">
                    <SlCalender className="due" />Due {formatDate(t.date)}<span> </span>{formatTime(t.date)}
                  </div>
                )}
                <div className="done-delete-buttons">
                  <MdOutlineFileDownloadDone
                    onClick={() => {
                      markAsDone(t.markDone, t.id);
                    }}
                    className="done-button"
                  />
                  <BsTrash
                    onClick={() => {
                      deleteTask(t.id);
                    }}
                    className="delete-button"
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="sticky-add-button">
        <BasicUsage />
      </div>
      {currentUserData.length == 0 && <AddTask />}
    </>
  );
}

export default Home;
