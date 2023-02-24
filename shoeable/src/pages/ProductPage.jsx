import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box, Flex ,Text} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
const ProductPage = () => {
 const {id} = useParams();
 const [char,userid] = id.split("");
console,log(userid)
useEffect(()=>{})
  return (
    <div>
        <Navbar/>
         <Box>
            <Flex>
                <Box> 
                </Box>
                <Box> 
                    <Text fontSize={"4xl"}></Text>
                </Box>
            </Flex>
         </Box>
        <Footer/>
    </div>
  )
}

export default ProductPage