import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useToast } from '@chakra-ui/react'

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
  InputRightElement,
  InputGroup
} from '@chakra-ui/react'
import React, { useEffect, useState } from "react"
export default function Login() {
  const {state,dispatch} = useContext(AuthContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const Navigate = useNavigate();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [userdata,setUserdata] = useState([]);
  const toast = useToast()

  console.log(process.env.REACT_APP_JSON_SERVER_PORT);


  useEffect(()=>{
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`)
    .then((res)=>{
      setUserdata(res.data)
    })
    .catch((err)=>console.log(err))
  },[]);

  const handleSubmit = (e)=>{
     const email = initialRef.current.value;
     const password = finalRef.current.value;
   let temp;
   let flag = false;
   if(email==="admin@gmail.com"&&password==="admin"){
     flag = true;
   }else{
    userdata.forEach(element => {
        if(email === element.email){
            flag = true;
            temp = element;
        }
      });
   }
   
      
      if(flag === false){
        toast({
          title: 'Invalid Email.',
          description: "User is not registered",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }else{
        if(email!=="admin@gmail.com"&&password!==temp.password){
            toast({
              title: 'Invalid Password.',
              description: "Enter Correct Password",
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
        }else{
            if(email!=="admin@gmail.com"){
                localStorage.setItem("user",JSON.stringify(temp));
            }
           
            if(email==="admin@gmail.com"&&password==="admin"){
                Navigate("/admin")
            }else{
              dispatch({type:"LoginUser",payload:`${temp.firstname}`})
              toast({
                title: 'Login Succesful.',
                description: "You are succesfully logged in",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
                Navigate("/")
                onClose()
            }
        }
      }
  }


  return (
    <>
      <Button onClick={onOpen} bg="black" color={"white"}>Welcome, Sign in</Button>


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
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                  ref={finalRef}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => Navigate("/signup")}>
              Create Account
            </Button>
            <Button onClick={(e)=>{
              handleSubmit(e)
            //  onClose()
              }}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}