import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box, Flex, Text, Image, SimpleGrid, Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const size = [{ text: 10 }, { text: 9.5 }, { text: 9 }, { text: 8.5 }, { text: 8 }, { text: 7.5 }, { text: 7 }, { text: 6.5 }, { text: 6 }, { text: 5.5 }, { text: 5 }]
const initialsize = {
  isClicked: false,
  size: null
}

const ProductPage = () => {
  const { id } = useParams();
  const [char, userid] = id.split("");
  const [images, setimages] = useState([])
  const [data, setdata] = useState({})
  const [setimage, updateimage] = useState("")
  const [buttonsize, updatebuttonsize] = useState(initialsize)
  useEffect(() => {
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens/${userid}`)
      .then((res) => {
        setdata(res.data)
        setimages(res.data.image)
        updateimage(res.data.image[0])
      })
      .catch((err) => console.log(err))
  }, [])
  console.log(buttonsize)
  return (
    <div>
      <Navbar />
      <Box>
        <Flex direction={{ base: "column", lg: "row" }} border={"1px solid black"} bg={"#f5f5f5"} w={"90%"} margin={"auto"} p={"20px"}>
          <Box w={{ base: "100%", lg: "60%" }}>
            <Flex direction={"column"} alignItems={"center"} >
              <Image
                src={setimage}
                alt={""}
              />
              <Flex>
                {images.map((image, i) => {
                  return <Image src={image} key={image + i} w={"100px"} h={"100px"} border={"1px solid black"} onClick={() => updateimage(image)} />
                })}
              </Flex>
            </Flex>
          </Box>
          <Flex direction={"column"} padding={"15px"} alignItems={"flex-start"} mt={{ base: "10px", lg: "0" }} w={{ base: "100%", lg: "40%" }} bg={"white"}>
            <Text fontSize={"3xl"} mb={"10px"}>{data.name}</Text>
            <Text fontSize={"lg"} mb={"20px"}>{data.brand}</Text>
            <Text fontSize={"lg"} mb={"10px"}>${data.price}</Text>
            <Text fontSize={"sm"} mb={"5px"}>interest-free payments of $21.25 with Klarna. Learn More</Text>
            <Text fontSize={"sm"} mb={"5px"}>Excluded from discount</Text>
            <Text fontSize={"sm"} mb={"5px"}>Size : {buttonsize.isClicked ? buttonsize.size : "please select size"} / color : {data.color}</Text>
            <SimpleGrid columns={6} spacing={10}>
              {size.map((item) => <Button bg={"white"} width={"50px"} height={"50px"} borderRadius={"50%"} padding={"20px"} _hover={{ border: "1px solid black", color: "white", bg: "black" }} onClick={(e) => {
                updatebuttonsize({
                  ...buttonsize,
                  isClicked: true,
                  size: e.target.textContent
                })
              }}>{item.text}</Button>)}
            </SimpleGrid>
            <Button bg={"black"} color={"white"} margin={"auto"}>Add to Cart</Button>
          </Flex>
        </Flex>
      </Box>
      <Box width={"90%"} margin={"auto"}>
        <Tabs mt={"10px"} border={"1px solid black"}>
          <TabList>
            <Tab>Details</Tab>
            <Tab>Size</Tab>
            <Tab>Rating</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>{data.description}</p>
              <p>An all-time classic updated with environmentally-preferred materials – the New Balance 574 Core is the ‘greenest’ the 574 has ever been! Originally introduced as trail and road running shoes, these icons step away from the narrow racing silhouettes to bring reliable comfort and stylistic versatility in an unassumingly simple package.</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </div>
  )
}

export default ProductPage