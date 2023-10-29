import React, { useContext } from "react";
import { ReminderContext } from "../../context";
import auth from "../../firebase";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

import firebase from "../../firebase";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    title,
    setTitle,
    description,
    setDescription,
    date,
    setDate,
    email,
    setEmail,
  } = useContext(ReminderContext);

  const addRemainder = async (e) => {
    if (title === "" || description === "" || date === "") {
      alert("Enter all the details properly");
    } else if (title === "") {
      alert("Enter the title");
    } else if (description === "") {
      alert("Enter the description");
    } else if (date === "") {
      alert("Enter the date");
    } else {
      e.preventDefault();
      const newRemainder = await addDoc(collection(db, "reminders"), {
        title: title,
        description: description,
        date: date,
        email: auth.currentUser.email,
      });
      window.location.reload(true);
    }
  };
  return (
    <>
      <Button colorScheme="gray" color={"#427ef5"} onClick={onOpen}>
        Add Task +
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Add title"
              my={2}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <Textarea
              placeholder="Add description"
              my={2}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              my={2}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="twitter"
              onClick={addRemainder}
              onClose={onClose}
              disabled={
                title === "" || description === "" || date === "" ? true : false
              }
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
