import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  Input,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  ChakraProvider,
  Grid
} from "@chakra-ui/react";
import { DataProvider, useData } from "../../../DataContext";

function UserForms() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userData, setUserData } = useData();
 
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [id, setId] = useState(1); 
  const [names, setNames] = useState(""); 
  const [userDatas, setUserDatas] = useState([]);
  const handleSave = () => {
    const newUser = {
      id,
      names
    };
        setUserDatas([...userDatas, newUser]);
    setId(id + 1);

  
    setNames("");
  };
  const handleSubmit = () => {
    setUserData({ name, address, email, phone });
    onOpen();
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <ChakraProvider>
<Grid templateColumns="repeat(2, 1fr)" gap={6} marginLeft="12px">

<Box borderWidth="1px" borderRadius="lg"  mt={3} margin="20px">
      <Text fontSize="2xl" textAlign="center">
        User Data
      </Text>
      <VStack spacing={2} align="stretch" pb={3}>
        <Input
          placeholder="Name"
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
        <Input
          placeholder="ID"
          value={id}
       
          readOnly
        />
      </VStack>
      <Button
        colorScheme="teal"
        variant="solid"
        isFullWidth
        onClick={handleSave}
      >
        Save
      </Button>
    </Box>
    <Box borderWidth="1px" borderRadius="lg" mt={3} margin="20px">
      <Text fontSize="2xl" textAlign="center">
        User Forms
      </Text>
      <VStack spacing={2} align="stretch" pb={3}>
        <Input
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </VStack>
      <Button
        colorScheme="teal"
        variant="solid"
        isFullWidth
        onClick={handleSubmit}
      >
        Save
      </Button>
      <AlertDialog isOpen={isOpen} onClose={handleClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Success</AlertDialogHeader>
            <AlertDialogBody>User data saved successfully!</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={handleClose}>Close</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
    </Grid> 
    </ChakraProvider>
  );
}
export default UserForms;

 