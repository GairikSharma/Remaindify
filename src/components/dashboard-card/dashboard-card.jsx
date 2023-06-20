import React from "react";
import { Card, CardBody, Text, Box } from "@chakra-ui/react";
import "./dashboard-card.css"

function DashboardCard() {
  return (
    <>
      <Card className="dashboard-card" __css={{width: "380px", height: "90px", border: "0.5px solid black", borderRadius: "7px",display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
        <CardBody __css={{width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <Box>
            <Text>
            Reminder
          </Text>
          <Text>
            7
          </Text>
          </Box>

          <Box>
            Logo
          </Box>
        </CardBody>
      </Card>
    </>
  );
}

export default DashboardCard;
