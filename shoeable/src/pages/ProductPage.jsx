import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box, Flex, Text, Image, SimpleGrid, Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
const size = [{ text: 10 }, { text: 9.5 }, { text: 9 }, { text: 8.5 }, { text: 8 }, { text: 7.5 }, { text: 7 }, { text: 6.5 }, { text: 6 }, { text: 5.5 }, { text: 5 }]
const initialsize = {
  isClicked: false,
  size: null
}

const ProductPage = () => {
  const { id } = useParams();
  const [char, userid] = id.split(":");
  const [images, setimages] = useState([])
  const [data, setdata] = useState({})
  const [setimage, updateimage] = useState("")
  const [buttonsize, updatebuttonsize] = useState(initialsize)
  const [cartdata,setcartdata] = useState([]);
  const toast = useToast()
  const {state,dispatch} = useContext(AuthContext)
  
console.log(userid)
  useEffect(() => {
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens/${userid}`)
      .then((res) => {
        setdata(res.data)
        setimages(res.data.image)
  
        updateimage(res.data.image[0])
      })
      .catch((err) => console.log(err))


      axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`)
       .then((res)=>setcartdata(res.data))
       .catch((err)=>console.log(err))
  }, [])

  const handleClick = (id,data)=>{
      if(!buttonsize.isClicked){
        toast({
          title: 'Select size.',
          description: "Please select size to add to cart",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
      else{
        let flag = false;
        cartdata.forEach((element,index)=>{
          if(element.id == id ){
            flag = true;
          }
        })
         if(flag === true){
          toast({
            title: 'Product is already in cart.',
            description: "Please checkout cart page",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
         }else{
          if(data.length!=0){
            
              let newArr = [...state.cartid,data.id] 
              dispatch({type:"cartid",payload:newArr})
           
          }
          axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`, {
           ...data,
           size : buttonsize.size
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
         
          toast({
            title: 'Product added in cart.',
            description: "Please checkout cart page",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          updatebuttonsize(initialsize)
         }
      }
  }


  console.log(state)
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
              {size.map((item) => <Button bg={"white"} key = {Math.random()+item} width={"50px"} height={"50px"} borderRadius={"50%"} padding={"20px"} _hover={{ border: "1px solid black", color: "white", bg: "black" }} onClick={(e) => {
                updatebuttonsize({
                  ...buttonsize,
                  isClicked: true,
                  size: e.target.textContent
                })
              }}>{item.text}</Button>)}
            </SimpleGrid>
            <Button bg={"black"} color={"white"} margin={"auto"} onClick={()=>handleClick(data.id,data)}>Add to Cart</Button>
          </Flex>
        </Flex>
      </Box>
      <Box width={"90%"} margin={"auto"}>
        <Tabs mt={"10px"} border={"1px solid black"}>
          <TabList>
            <Tab>Details</Tab>
            <Tab>Size</Tab>
           
          </TabList>

          <TabPanels>
            <TabPanel>
              <p mb={"10px"}>{data.description}</p>
              <p mb={"10px"}>An all-time classic updated with environmentally-preferred materials – the New Balance 574 Core is the ‘greenest’ the 574 has ever been! Originally introduced as trail and road running shoes, these icons step away from the narrow racing silhouettes to bring reliable comfort and stylistic versatility in an unassumingly simple package.</p>
            </TabPanel>
            <TabPanel>
              <p mb={"10px"}>We are committed to making your online shopping experience as easy as possible. Please use these charts to determine which size will fit you best. Your satisfaction is guaranteed. We promise the items you order will fit right or you can return them for free. Learn more about our Fit Guarantee or view our Return Policy.</p>
              <p mb={"10px"}>Women's shoes are made on a narrower last (the foot-shaped form used in making shoes) than men's. In addition, the heel on a woman's shoe is narrower than the forefoot width. Men's shoes have the same width at the forefoot and heel. The medium width for women's shoes is B, while the medium width for men's shoes is D.</p>
              <p mb={"10px"}>Unfortunately, there is no international sizing standard. Sizes vary from country to country. Please use the tables above only as a guide to help you in ordering the correct size. Please note that all sizes, are listed and sold in US sizes.</p>
              <p mb={"10px"}>Women can wear men's shoes by converting their size to men's by subtracting 1.5 from their numeric size. For example, if you are a size 8 in women's, you would try a 6.5 in men's sizes. This is a loose conversion and doesn't change the difference in width and forefoot-to-heel ratios.</p>
            </TabPanel>
            
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </div>
  )
}

export default ProductPage