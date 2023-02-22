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
    FormControl,
    FormLabel,
    Input,

  } from '@chakra-ui/react'
import React from "react"
  export default function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen} bg="black">Welcome, Sign in</Button>
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign In</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Enter Your Email</FormLabel>
                <Input ref={initialRef} placeholder='Email Address' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Enter Password</FormLabel>
                <Input placeholder='Password' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Create Account
              </Button>
              <Button onClick={onClose}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }