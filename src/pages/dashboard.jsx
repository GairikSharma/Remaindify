import React from "react";
import "../styles/dashboard.css";
import { Card, CardBody, Text, Box } from "@chakra-ui/react";
import { BsAlarm } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { ReminderContext } from "../context";
import { useContext } from "react";
import auth from "../firebase";

function Dashboard() {
  const { alltask } = useContext(ReminderContext);
  const arr = [];
  const statusArr = [];
  {
    alltask.map((totalTask) => {
      if (totalTask.email === auth.currentUser.email) {
        arr.push(totalTask.title);
      }
      if (totalTask.email === auth.currentUser.email) {
        if (totalTask.status) {
          statusArr.push(totalTask.status);
        }
      }
    });
  }
  return (
    <>
      <div className="dashboard-container">
        <Card className="dashboard-card">
          <CardBody
            __css={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Text className="dashboard-card-heading">Total Task</Text>
              <Text className="dashboard-card-count">{arr.length}</Text>
            </Box>

            <Box __css={{ fontSize: "44px" }}>
              <BsAlarm className="dashboard-icon" />
            </Box>
          </CardBody>
        </Card>

        <Card className="dashboard-card">
          <CardBody
            __css={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Text className="dashboard-card-heading">Completed</Text>
              <Text className="dashboard-card-count">{statusArr.length}</Text>
            </Box>

            <Box __css={{ fontSize: "44px" }}>
              <AiOutlineFileDone className="dashboard-icon" />
            </Box>
          </CardBody>
        </Card>

        <Card className="dashboard-card">
          <CardBody
            __css={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Text className="dashboard-card-heading">Pending</Text>
              <Text className="dashboard-card-count">
                {arr.length - statusArr.length}
              </Text>
            </Box>

            <Box __css={{ fontSize: "44px" }}>
              <MdPendingActions className="dashboard-icon" />
            </Box>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
