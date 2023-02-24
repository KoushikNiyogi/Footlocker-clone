import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box, Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
const ProductPage = () => {
 const {id} = useParams();
 console.log(id);
  return (
    <div>
        <Navbar/>
         <Box>
            <Flex>
                <></>
            </Flex>
         </Box>
        <Footer/>
    </div>
  )
}

export default ProductPage