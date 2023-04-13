import React from 'react'
import axios from 'axios'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Box, Button, Flex, Text, Select, Divider, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useState, useEffect, useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const initialState = {
  cardno: "",
  cardname: "",
  expiry: "",
  cvv: ""

}
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "cardno": return {
      ...state,
      cardno: payload
    }
    case "cardname": return {
      ...state,
      cardname: payload
    }
    case "expiry": return {
      ...state,
      expiry: payload
    }
    case "cvv": return {
      ...state,
      cvv: payload
    }
    default: return state
  }
}
const Payment = () => {
  const [data, setdata] = useState([]);
  const Navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);
  const [formstate, dispatcher] = useReducer(reducer, initialState);
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
  const handlePlaceorder = () => {
    let obj = {
      cardno: formstate.cardno,
      cardname: formstate.cardname,
      expiry: formstate.expiry,
      cvv: formstate.cvv
    }
    if (obj.cardno !== undefined && obj.cardname !== undefined && obj.expiry !== undefined && obj.cvv !== undefined) {
      state.cartid.forEach((item) => {
        axios.delete(`https://shoeable-server.onrender.com/cart/${item}`)
          .then((res) => {
           console.log(res)
           Navigate("/success");
          })
          .catch((err) => console.log(err));
      })
    }

  }
  console.log(state);
  return (
    <div>
      <Navbar />
      <Flex direction={{ base: "column-reverse", lg: "row" }}>
        <FormControl width={{ base: "90%", lg: "70%" }} p={"15px"} margin={"auto"}>
          <Text fontSize={"4xl"}>PROCESS PAYMENT</Text>
          <Box >
            <FormLabel>Enter Card Number</FormLabel>
            <Input type='number' id="cardnumber" width={{ base: "90%", md: "400px" }} onChange={(e) => dispatcher({ type: "cardno", payload: e.target.value })} />
          </Box>
          <Box >
            <FormLabel>Enter Card Name</FormLabel>
            <Input type='text' id="cardname" width={{ base: "90%", md: "400px" }} onChange={(e) => dispatcher({ type: "cardname", payload: e.target.value })} />
          </Box>
          <Box>
            <FormLabel>Expiry Date</FormLabel>
            <Input type='month' id="expirydate" width={{ base: "90%", md: "400px" }} onChange={(e) => dispatcher({ type: "expiry", payload: e.target.value })} />
          </Box>
          <Box>
            <FormLabel>Enter CVV</FormLabel>
            <Input type='number' id="" width={{ base: "90%", md: "400px" }} onChange={(e) => dispatcher({ type: "cvv", payload: e.target.value })} />
          </Box>
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
          <Button bg={"black"} color={"white"} onClick={() => handlePlaceorder()}>Place Order</Button>
        </Flex>
      </Flex>
      <Footer />
    </div>
  )
}

export default Payment