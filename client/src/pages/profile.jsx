import React, { useContext } from "react";

import {
  Card,
  CardBody,
  Text,
  Box,
  CardHeader,
  CardFooter,
  Avatar,
  Flex,
  Heading,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";
import auth from "../firebase";
import { FiMoreVertical } from "react-icons/fi";
import "../styles/profile.css";
import { ReminderContext } from "../context";

function Profile() {
  const { alltask, setAlltask } = useContext(ReminderContext);
  var designationArr = [];
  {
    alltask.map((designation) => {
      if (designation.email === auth.currentUser.email) {
        console.log(designation.designation);
        designationArr.push(designation.designation);
      }
    });
  }
  return (
    <>
      <Box
        __css={{ width: "100%", display: "flex", justifyContent: "center" }}
        mt={5}
      >
        <Card maxW="md">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name={auth.currentUser.displayName}
                  src={auth.currentUser.photoURL}
                />

                <Box>
                  <Heading size="sm">{auth.currentUser.displayName}</Heading>
                  {/* <Heading size="sm">Id:</Heading> */}
                  <Text>{auth.currentUser.email}</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<FiMoreVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              Our reminder app is designed to help you stay organized and never
              miss an important task or event again. With our user-friendly
              interface and customizable features, you can easily set reminders
              for appointments, meetings, birthdays, deadlines, and more.
              Whether you need a simple daily reminder or a complex recurring
              schedule, our app has you covered. Stay on top of your commitments
              with timely notifications, and take advantage of additional
              features like priority settings, notes, and categorization to
              streamline your workflow. Simplify your life and boost your
              productivity with our intuitive and reliable reminder app.
            </Text>
          </CardBody>

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button
              flex="1"
              variant="ghost"
              colorScheme="red"
              onClick={() => auth.signOut()}
            >
              Log Out
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
}

export default Profile;
