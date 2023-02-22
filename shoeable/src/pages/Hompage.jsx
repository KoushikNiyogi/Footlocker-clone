import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { Box, Flex, Text, Button, Image, SimpleGrid,Center } from '@chakra-ui/react'
const Hompage = () => {
  return (
    <div>
      <Navbar />

      <Box>

       {/* first element */}

        <Flex alignItems="center" bg={{
          base: "white",
          xl: "#f3af22"
        }} 
        direction = {{base: "column-reverse",
        xl: "row"}}
        justifyContent="space-between">
          <Flex alignItems={"flex-start"} direction={'column'} ml="5rem">
            <Text fontSize='5xl'>Your Starting Style Lineup</Text>
            <Text fontSize='md'>Step onto the court sporting this season's latest basketball gear</Text>
            <Button>SHOP BASKETBALL</Button>
          </Flex>
          <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/230221-fl-hp-womens-basketball-m-asp.jpg' alt='Dan Abramov' />
        </Flex>

        {/* second element */}

        <SimpleGrid mt={10} columns={{ base: 2, md: 3,lg:6 }}>
          <Box>
            <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/220201-fl-hp-product-6-up-mens.jpg'/>
            <Text fontSize="md">SHOP MEN'S</Text>
          </Box>
          <Box>
            <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/220201-fl-hp-product-6-up-womens.jpg'/>
            <Text fontSize="md">SHOP WOMEN'S</Text>
          </Box>
          <Box>
            <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/220201-fl-hp-product-6-up-kids.jpg'/>
            <Text fontSize="md">SHOP KID'S</Text>
          </Box>
          <Box>
            <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/220201-fl-hp-product-6-up-cloth.jpg'/>
            <Text fontSize="md">SHOP CLOTHING</Text>
          </Box>
          <Box>
            <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/220201-fl-hp-product-6-up-acce.jpg'/>
            <Text fontSize="md">SHOP ACCESSORIES</Text>
          </Box>
          <Box>
            <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/220201-fl-hp-product-6-up-sale.jpg'/>
            <Text fontSize="md">SHOP SALE</Text>
          </Box>
        </SimpleGrid>

        <SimpleGrid bg={"whiteAlpha.100"} mt={10} columns={{ base: 2, md: 3,lg:6 }}>
          <Box>
            <Image src="https://images.footlocker.com/content/dam/final/footlockercanada/site/homepage/september/210910-FLCA-HP-Brand-6up-adidas-6up.jpg"/>
          </Box>
          <Box>
            <Image src="https://images.footlocker.com/content/dam/final/footlockercanada/site/homepage/september/210910-FLCA-HP-Brand-6up-nike-6up.jpg"/>
          </Box>
          <Box>
            <Image src="https://images.footlocker.com/content/dam/final/footlockercanada/site/homepage/september/210910-FLCA-HP-Brand-6up-jordan-6up.jpg"/>
          </Box>
          <Box>
            <Image src="https://images.footlocker.com/content/dam/final/footlockercanada/site/homepage/september/210910-FLCA-HP-Brand-6up-new-balance-6up.jpg"/>
          </Box>
          <Box>
            <Image src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2022/october/221024-fl-hp-brands-6-up-hoka.jpg"/>
          </Box>
          <Box>
            <Image src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2022/october/221024-fl-hp-brands-6-up-ugg.jpg"/>
          </Box>
        </SimpleGrid>


         <SimpleGrid  mt={10} columns={{ base: 1,lg:3 }}>
          <Center>
            <Box>
              <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/230216-fl-hp-nike-air-force-1-3up.jpg'/>
              <Text fontSize={"3xl"}>Classic Nike Kicks</Text>
              <Text fontSize={"md"}>SHOP NIKE AIR FORCE 1</Text>
            </Box>
          </Center>
          <Center>
            <Box>
              <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/230217-fl-bhm-striper-picks-3up.jpg'/>
              <Text fontSize={"3xl"}>Home Grown Picks</Text>
              <Text fontSize={"md"}>SHOP BLACK OWNED BRANDS</Text>
            </Box>
          </Center>
          <Center>
            <Box>
              <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/230206-fl-homepage-nike-tech-fleece-3up.jpg'/>
              <Text fontSize={"3xl"}>Court-Ready Styles</Text>
              <Text fontSize={"md"}>SHOP NIKE BASKETBALL</Text>
            </Box>
          </Center>
         </SimpleGrid>

         <SimpleGrid mt={10} columns={{ base: 2, md: 3,lg:6 }}>
          <Box>
            <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/20200306-Nike-Air-Force-1-Restock-6up.jpg'/>
            <Text fontSize="md">Nike Air Force 1</Text>
          </Box>
          <Box>
            <Image src='https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-37741102.jpg'/>
            <Text fontSize="md">PUMA Rick & Morty</Text>
          </Box>
          <Box>
            <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/new-arrival-6up-D2597700.jpg'/>
            <Text fontSize="md">Jordan Retro 1 High</Text>
          </Box>
          <Box>
            <Image src='https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-GY8947.jpg'/>
            <Text fontSize="md">Adidas Crazy 1</Text>
          </Box>
          <Box>
            <Image src='https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-6276402.jpg'/>
            <Text fontSize="md">Under Armour Curry 2 Low</Text>
          </Box>
          <Box>
            <Image src='https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-D0587047.jpg'/>
            <Text fontSize="md">Jordan Retro 5 Aqua</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Flex alignItems="center" bg={{
          base: "white",
          xl: "#f48232"
        }} 
        direction = {{base: "column-reverse",
        xl: "row"}}
        justifyContent="space-between">
          <Flex alignItems={"flex-start"} direction={'column'} ml="5rem">
            <Text fontSize='5xl'>Start ‘Em Young</Text>
            <Text fontSize='md'>Have your kids following in your footsteps on the court in new Nike basketball gear.</Text>
            <Button>SHOP KIDS NIKE</Button>
          </Flex>
          <Image w={"800px"} h={"400px"} src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/230221-fl-hp-kids-nike-m-1up.jpg' />
        </Flex>

        <SimpleGrid  mt={10} mb={10} columns={{ base: 1,lg:3 }}>
          <Center>
            <Box>
              <Image src='https://images.footlocker.com/content/dam/final/flx/site/homepage/2022/november/221104-flx-hp-v4-3up-fl.jpg'/>
              <Text fontSize={"3xl"}>Join FLX for Game-Changing Perks</Text>
              <Text fontSize={"md"}>FLX Members get free shipping, exclusive offers, a birthday gift & earn XPoints for rewards + Head Starts on launches.</Text>
            </Box>
          </Center>
          <Center>
            <Box>
              <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/february/230213-fl-homepage-fan-shop-nba-3up.jpg'/>
              <Text fontSize={"3xl"}>Unbeatable Fan Styles</Text>
              <Text fontSize={"md"}>Show up and show off the love for your team in these winning fits from our fan shop.</Text>
            </Box>
          </Center>
          <Center>
            <Box>
              <Image src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2022/december/221227-fl-p3up-hoh-3up.jpg'/>
              <Text fontSize={"3xl"}>House of Hoops</Text>
              <Text fontSize={"md"}>House of Hoops by Foot Locker is an ode to basketball. A home for premium kicks from Nike, Jordan and Converse, that’s built by the game.</Text>
            </Box>
          </Center>
         </SimpleGrid>

      <Footer />
    </div>
  )
}

export default Hompage