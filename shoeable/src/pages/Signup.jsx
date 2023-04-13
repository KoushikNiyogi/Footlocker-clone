import React, { useReducer } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import axios from "axios"
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Text,Box, Flex, FormControl, FormLabel, Input,Select,Button, Center } from "@chakra-ui/react"
const initialState = {
  firstname : "",
  lastname : "",
  gender : "",
  email: "",
  password : "",
  mobileno:""
}
 
const reducer = (state,{type,payload})=>{
  switch(type){
    case "firstname" : return{
      ...state,
      firstname:payload
    }
    case "lastname" : return{
      ...state,
      lastname:payload
    }
    case "gender" : return{
      ...state,
      gender:payload
    }
    case "email" : return{
      ...state,
      email:payload
    }
    case "password" : return{
      ...state,
      password:payload
    }
    case "mobileno" : return{
      ...state,
      mobileno:payload
    }
    case "address" : return{
      ...state,
      address:payload
    }
    case "state" : return{
      ...state,
      mobileno:payload
    }
    default:return state
  }
}
const Signup = () => {
  const toast = useToast()
  const [state,dispatch] = useReducer(reducer,initialState);
  const Navigate = useNavigate();
  const handleClick = ()=>{
    let obj = {...state}
    console.log(process.env.REACT_APP_JSON_SERVER_PORT)
    if(state.firstname!==""&&state.lastname!==""&&state.gender!==""&&state.email!==""&&state.password!==""&&state.mobileno!==""){
      axios({
        method: 'post',
        url: `https://shoeable-server.onrender.com/users`,
        data: {
          ...obj
        }
      })
      .then((res)=>{
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        Navigate("/")
      })
      .catch((err)=>console.log(err));
    }
  }
  return (
    <div>
      <Navbar />
        <FormControl width={"60%"} p={"15px"} margin={"auto"}>
          <Center>
            <Text fontSize={"4xl"}>Create an Account</Text>
          </Center>
          <Flex mt={"10px"} direction={{base:"column",md:"row"}} justifyContent = {"space-between"}>
            <Box >
            <FormLabel>First Name</FormLabel>
            <Input type='text' id="firstname" width={{base:"90%",md:"400px"}} onChange={(e)=>dispatch({type:"firstname",payload:e.target.value})}/>
            </Box>
            <Box>
            <FormLabel>Last Name</FormLabel>
            <Input type='text' id="lastname" width={{base:"90%",md:"400px"}} onChange={(e)=>dispatch({type:"lastname",payload:e.target.value})}/>
            </Box>
          </Flex>
          <Flex mt={"10px"} direction={{base:"column",md:"row"}} justifyContent = {"space-between"}>
          <Box>
            <FormLabel>Gender</FormLabel>
            <Select id="gender" placeholder='Select option' width={{base:"90%",md:"400px"}} onChange={(e)=>dispatch({type:"gender",payload:e.target.value})}>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </Select>
            </Box>
            <Box>
            <FormLabel>Enter Email</FormLabel>
            <Input id="email" type='text' width={{base:"90%",md:"400px"}} onChange={(e)=>dispatch({type:"email",payload:e.target.value})}/>
            </Box>
          </Flex>
          <Flex mt={"10px"} direction={{base:"column",md:"row"}} justifyContent = {"space-between"}>
            <Box>
            <FormLabel>Password</FormLabel>
            <Input id="password" type='password'  width={{base:"90%",md:"400px"}} onChange={(e)=>dispatch({type:"password",payload:e.target.value})}/>
            </Box>
            <Box>
            <FormLabel>Mobile Number</FormLabel>
            <Input id="mobileno" type='text'  width={{base:"90%",md:"400px"}} onChange={(e)=>dispatch({type:"mobileno",payload:e.target.value})}/>
            </Box>
           
          </Flex>

          <Button mt={"20px"} bg={"black"} color={"white"}  width={{base:"90%",md:"400px"}} onClick={()=>handleClick()}>Create</Button>
        </FormControl>
      <Footer />
    </div>
  )
}

export default Signup