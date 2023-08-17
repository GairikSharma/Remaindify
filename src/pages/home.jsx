import React, { useContext, useEffect, useState } from "react";
import "../styles/home.css";
import { Card, CardBody, Text, Box, Button } from "@chakra-ui/react";
import BasicUsage from "../components/modal/modal";

import { db } from "../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ReminderContext } from "../context";
import auth from "../firebase";

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
      console.log(completedArr);
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
    window.location.reload(true)
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
  return (
    <>
      <center style={{marginTop: "25px"}}>
        <BasicUsage />
      </center>
      <div className="tasks">
        <Card
          __css={{
            borderBottom: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {alltask.map((t) => {
            if (t.email === auth.currentUser.email) {
              return (
                <>
                  <CardBody
                    __css={{
                      width: "80%",
                      minHeight: "90px",
                      maxHeight: "auto",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderBottom: "0.5px rgba(136, 136, 136, 0.436) solid",
                    }}
                  >
                    <Box
                      __css={{
                        width: "75%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "flex-start",
                        paddingLeft: "24px",
                      }}
                    >
                      <Text
                      className={(t.status) ? "title-diasable" : "taskTitle"}
                      >{t.title}</Text>
                      <Text className={(t.status) ? "description-disable" : "taskDescription"}>{t.description}</Text>
                    </Box>
                    <Box
                      __css={{
                        width: "25%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        colorScheme="whatsapp"
                        onClick={() => {
                          markAsDone(t.markDone, t.id);
                        }}
                        className={(t.status) && "done-btn-disable"}
                      >
                        Mark as done
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          deleteTask(t.id);
                        }}
                        className={(t.status) && "delete-btn-disabled"}
                      >
                        Delete
                      </Button>
                    </Box>
                  </CardBody>
                </>
              );
            }
          })}
        </Card>
      </div>
    </>
  );
}

export default Home;