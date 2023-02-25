import { Box, Button, Flex, Image, Text, Select, Divider } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Cart = () => {
  const [data, setdata] = useState([]);
  const [showedit, updateedit] = useState(true);
  const fetchandupdate = () => {
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchandupdate();
  }, [])
  const handleChange = (e, id) => {
    let select = e.target.value;
    axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart/${id}`, {

      quantity: select

    })
      .then((res) => {
        fetchandupdate();
      })
      .catch((err) => console.log(err));
  }

  const hnadleDlelete = (id) => {
    axios.delete(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart/${id}`)
      .then((res) => {
        fetchandupdate();
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Navbar />
      <Flex direction={{ base: "column-reverse", lg: "row" }}>
        <Box margin={"auto"} width={{ base: "90%", lg: "70%" }} border={"1px solid black"}>
          {
            data.map((item, index) => {
              return <Flex >
                <Image bg={"whitesmoke"} w={"200px"} h={"200px"} src={data.length === 0 ? "" : item.image[0]} />
                <Flex direction={"column"} alignItems={"flex-start"} padding={"5px"}>
                  <Text fontSize={"3xl"} mb={"5px"}>{data.length === 0 ? "" : item.color}</Text>
                  <Text fontSize={"md"} mb={"5px"}>Size : {data.length === 0 ? "" : `${item.size} / ${item.brand}`}</Text>
                  <Text fontSize={"md"} mb={"10px"}>Price : ${data.length === 0 ? "" : item.price}</Text>
                  <Text fontSize={"md"} mb={"10px"}>Quantity : {data.length === 0 ? "" : item.quantity}</Text>
                  <Select onChange={(e) => handleChange(e, item.id)}>
                    <option value="">Select Quantity</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </Select>
                  <Button onClick={() => hnadleDlelete(item.id)}>Remove</Button>

                </Flex >
              </Flex>
            })
          }
        </Box>
        <Flex justifyContent={"flex-start"} direction={"column"} padding={"10px"} margin={"auto"} width={{ base: "90%", lg: "30%" }}>
          <Text fontSize={"3xl"} mb={"5px"}>ORDER SUMMARY</Text>
          <Flex justifyContent={"space-between"} mb={"5px"}>
            <Text fontSize={"xl"} >SUBTOTAL</Text>
            <Text fontSize={"xl"} >${data.length === 0 ? "" : data.reduce((acc, item) => {
              let price = item.price;
              let quantity = typeof (item.quantity) === "number" ? item.quantity : +item.quantity;
              let total = price * quantity;
              acc += total;
              return acc
            }, 0)}</Text>
          </Flex>
          <Text textAlign={"left"} fontSize={"xl"} >{data.length != 0 ? data.reduce((acc, item) => {
            let quantity = typeof (item.quantity) === "number" ? item.quantity : +item.quantity;
            acc += quantity;
            return acc
          }, 0) : 0} Items</Text>
          <Divider borderColor={"black"} mt={"10px"} mb={"10px"} />
          <Flex justifyContent={"space-between"} mb={"5px"}>
            <Text fontSize={"xl"} >SHIPPING</Text>
            <Text fontSize={"xl"} >TBD</Text>
          </Flex>
          <Divider borderColor={"black"} mt={"10px"} mb={"10px"} />
          <Flex justifyContent={"space-between"} mb={"5px"}>
            <Text fontSize={"xl"} >TOTAL BILL</Text>
            <Text fontSize={"xl"} >${data.length === 0 ? "" : data.reduce((acc, item) => {
              let price = item.price;
              let quantity = typeof (item.quantity) === "number" ? item.quantity : +item.quantity;
              let total = price * quantity;
              acc += total;
              return acc
            }, 0)}</Text>
          </Flex>
          <Text textAlign={"left"} fontSize={"sm"} mb={"10px"}>4 interest-free payments of $42.50 with Klarna.</Text>
          <Text textAlign={"left"} fontSize={"sm"} mb={"10px"}>Tax calculated in Checkout</Text>
          <Button bg={"black"} color={"white"}>Place Order</Button>
        </Flex>
      </Flex>
      <Footer />
    </div>
  )
}

export default Cart