import React from 'react'
import { Box,SimpleGrid ,Text,Flex,Divider} from "@chakra-ui/react"
import  {AiOutlineFacebook,AiOutlineInstagram,AiOutlineTwitter,AiOutlineYoutube} from "react-icons/ai"
const Footer = () => {
    return (
        <Box bg='black' color="white">
            <SimpleGrid columns={{ base: 1,sm:1, md: 2,lg:4 }}  p={10} spacing={5}>
                <Flex direction="column" alignItems="flex-start" >
                    <Text fontSize='2xl' mb="10px">Email Gift Cards</Text>
                    <Text>Valid online and a any Shoeable Inc.brand</Text>
                    <Text mt="10px" p="10px" border="1px solid white">Buy Email Gift Cards</Text>
                </Flex>
                <Flex direction="column"alignItems="flex-start">
                    <Text fontSize='2xl' mb="10px">Reward Program</Text>
                    <Text>Get free shipping, rewards, and more with flx</Text>
                    <Text  mt="10px" p="10px" border="1px solid white">FLX DETAILS</Text>
                </Flex>
                <Flex direction="column" alignItems="flex-start">
                    <Text fontSize='2xl' mb="10px">Sign up For Emails</Text>
                    <Text>Stay in the loop, wherever you go</Text>
                    <Text  mt="10px" p="10px"  border="1px solid white">SIGN UP FOR EMAILS</Text>
                </Flex>
                <Flex direction="column"alignItems="flex-start">
                    <Text fontSize='2xl' mb="10px">Mobile App</Text>
                    <Text>Get ahead of the game with on-the-go shopping</Text>
                    <Text  mt="10px" p="10px" border="1px solid white">MOBILE APP DETAILS</Text>
                </Flex>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1,sm:1, md: 2,lg:4 }}  p="2rem">
                <Flex  direction="column" alignItems="flex-start">
                   <Text fontSize='xl'>About Shoeable</Text>
                   <Divider/>
                   <Text fontSize="sm">About Us</Text>
                   <Text fontSize="sm">Accessibility Statement</Text>
                   <Text fontSize="sm">Career Opportunities</Text>
                   <Text fontSize="sm">Pages Sitemap</Text>
                   <Text fontSize="sm">Products Sitemap 1</Text>
                   <Text fontSize="sm">Products Sitemap 2</Text>
                   <Text fontSize="sm">Products Sitemap 3</Text>
                   <Text fontSize="sm">Privacy Statement</Text>
                   <Text fontSize="sm">(Calif.) Do Not Sell or Share my Personal Information</Text>
                   <Text fontSize="sm">(Calif.) Limit the Use of my Sensitive Personal Data</Text>
                   <Text fontSize="sm">Ad Choices</Text>
                   <Text fontSize="sm">Terms Of Use</Text>
                </Flex>
                <Flex direction="column" alignItems="flex-start">
                   <Text fontSize='xl'>CUSTOMER SERVICE</Text>
                   <Divider/>
                   <Text fontSize="sm">Contact Us</Text>
                   <Text fontSize="sm">Ordering Help</Text>
                   <Text fontSize="sm">Order Status</Text>
                   <Text fontSize="sm">Shipping Info</Text>
                   <Text fontSize="sm">Store Pick Up</Text>
                   <Text fontSize="sm">Returns-Exchanges</Text>
                   <Text fontSize="sm">Help</Text>
                   <Text fontSize="sm">COVID-19 Information</Text>
                   <Text fontSize="sm">Check Gift Card Balance</Text>
                </Flex>
                <Flex direction="column" alignItems="flex-start">
                    <Text fontSize='xl'>QUICK LINKS</Text>
                    <Divider/>
                    <Text fontSize="sm">Store Locator</Text>
                    <Text fontSize="sm">Text Sign Up</Text>
                    <Text fontSize="sm">Launch 101</Text>
                    <Text fontSize="sm">Klarna</Text>
                    <Text fontSize="sm">Coupons</Text>
                    <Text fontSize="sm">Affiliates</Text>
                    <Text fontSize="sm">Fit Guarantee</Text>
                    <Text fontSize="sm">Military Discount</Text>
                    <Text fontSize="sm">Student Discount</Text>
                    <Text fontSize="sm">Release Calendar</Text>
                    <Text fontSize="sm">Start a Return/Exchange</Text>
                </Flex>
                <Flex direction="column" alignItems="flex-start">
                    <Text fontSize='xl'>SOCIAL</Text>
                    <Divider/>
                    <Flex><AiOutlineFacebook size={40}/><AiOutlineInstagram size={40}/><AiOutlineTwitter size={40}/><AiOutlineYoutube size={40}/></Flex>
                    <Text fontSize='xl' >PAYMENT METHODS</Text>
                    <Divider/>
                </Flex>
            </SimpleGrid>
        </Box>
    )
}

export default Footer