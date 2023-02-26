import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { Box, Button, Flex, Image, Text, Select, Divider,FormControl,Center,FormLabel,Input } from '@chakra-ui/react'
import { useState, useEffect,useContext,useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const initialState = {
  firstname : "",
  lastname : "",
  email: "",
  mobileno:"",
  address : "",
  state : ""
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
   
    case "email" : return{
      ...state,
      email:payload
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
      state:payload
    }
    default:return state
  }
}
const Address = () => {
  const [data, setdata] = useState([]);
  const Navigate = useNavigate();
  const {state,dispatch} = useContext(AuthContext);
  const [formstate,dispatcher] = useReducer(reducer,initialState);

  const fetchandupdate = () => {
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`)
      .then((res) => {
        
       

        setdata(res.data)
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchandupdate();
    
  }, [])

  const handlePlaceorder = () =>{
      let obj = {
        firstname : formstate.firstname,
        lastname :formstate.lastname,
        email : formstate.email,
        mobileno : formstate.mobileno,
        address : formstate.address,
        state : formstate.state
      }
      if(obj.firstname!==undefined&&obj.lastname!==undefined&&obj.email!==undefined&&obj.mobileno!==undefined&&obj.address!==undefined&&obj.state!==undefined){
        Navigate("/payment");
      }
    }
  return (
    <div>
      <Navbar/>
      <Flex direction={{ base: "column-reverse", lg: "row" }}>
        <FormControl width={{ base: "90%", lg: "70%" }} p={"15px"} margin={"auto"}>
          <Center>
            <Text fontSize={"4xl"}>PERSONAL INFORMATIOM AND ADDRESS</Text>
          </Center>
          <Flex mt={"10px"} direction={{base:"column",lg:"row"}} justifyContent = {"space-evenly"}>
            <Box >
            <FormLabel>First Name</FormLabel>
            <Input type='text' id="firstname" width={{base:"90%",md:"400px"}}  onChange={(e)=>dispatcher({type:"firstname",payload:e.target.value})}/>
            </Box>
            <Box>
            <FormLabel>Last Name</FormLabel>
            <Input type='text' id="lastname" width={{base:"90%",md:"400px"}} onChange={(e)=>dispatcher({type:"lastname",payload:e.target.value})}/>
            </Box>
          </Flex>
          <Flex mt={"10px"} direction={{base:"column",md:"row"}} justifyContent = {"space-evenly"}>

            <Box>
            <FormLabel>Enter Email</FormLabel>
            <Input id="email" type='text' width={{base:"90%",md:"400px"}} onChange={(e)=>dispatcher({type:"email",payload:e.target.value})}/>
            </Box>

            <Box>
            <FormLabel>Mobile Number</FormLabel>
            <Input id="mobileno" type='text'  width={{base:"90%",md:"400px"}} onChange={(e)=>dispatcher({type:"mobileno",payload:e.target.value})}/>
            </Box>
          </Flex>
          <Flex mt={"10px"} direction={{base:"column",md:"row"}} justifyContent = {"space-evenly"}>

            <Box>
            <FormLabel>Enter Address</FormLabel>
            <Input id="address" type='text' width={{base:"90%",md:"400px"}} onChange={(e)=>dispatcher({type:"address",payload:e.target.value})}/>
            </Box>

            <Box>
            <FormLabel>Enter State</FormLabel>
            <Input id="" type='text'  width={{base:"90%",md:"400px"}} onChange={(e)=>dispatcher({type:"state",payload:e.target.value})}/>
            </Box>
          </Flex>

        </FormControl>

        



        <Flex justifyContent={"flex-start"} direction={"column"} padding={"10px"} margin={"auto"} width={{ base: "90%", lg: "30%" }}>
          <Text fontSize={"3xl"} mb={"5px"}>ORDER SUMMARY</Text>
          <Flex justifyContent={"space-between"} mb={"5px"}>
            <Text fontSize={"xl"} >SUBTOTAL</Text>
            <Text fontSize={"xl"} >${data.length === 0 ? "" : state.total}</Text>
          </Flex>
          <Text textAlign={"left"} fontSize={"xl"} >{data.length != 0 ? state.quantity : 0} Items</Text>
          <Divider borderColor={"black"} mt={"10px"} mb={"10px"} />
          <Flex justifyContent={"space-between"} mb={"5px"}>
            <Text fontSize={"xl"} >SHIPPING</Text>
            <Text fontSize={"xl"} >TBD</Text>
          </Flex>
          <Divider borderColor={"black"} mt={"10px"} mb={"10px"} />
          <Flex justifyContent={"space-between"} mb={"5px"}>
            <Text fontSize={"xl"} >TOTAL BILL</Text>
            <Text fontSize={"xl"} >${data.length === 0 ? "" : state.total}</Text>
          </Flex>
          <Text textAlign={"left"} fontSize={"sm"} mb={"10px"}>4 interest-free payments of $42.50 with Klarna.</Text>
          <Text textAlign={"left"} fontSize={"sm"} mb={"10px"}>Tax calculated in Checkout</Text>
          <Button bg={"black"} color={"white"} onClick={()=>handlePlaceorder()}>Place Order</Button>
        </Flex>
      </Flex>
      <Footer/>
    </div>
  )
}

export default Address