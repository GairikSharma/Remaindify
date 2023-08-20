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
    e.preventDefault();
    const newRemainder = await addDoc(collection(db, "reminders"), {
      title: title,
      description: description,
      date: date,
      email: auth.currentUser.email,
    });
    window.location.reload(true);
  };
  return (
    <>
      <Button colorScheme="teal" variant="outline" onClick={onOpen}>
        +
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
              colorScheme="green"
              onClick={addRemainder}
              onClose={onClose}
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
