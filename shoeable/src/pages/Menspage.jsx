import React, { useEffect, useState } from 'react'
import axios from "axios"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { Box, Flex, CheckboxGroup, Stack, Image, SimpleGrid, Checkbox, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react'
import { BsBox } from 'react-icons/bs'
import { FiMinus } from "react-icons/fi"
import { GrFormAdd } from "react-icons/gr"
const Menspage = () => {
  const [state, setState] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens?brand=Mens`)
      .then((res) => {
        console.log(res.data)
        setState(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      <Navbar />


      <Box>

        <Flex>
          <Box width={"20%"}>
            <Accordion allowMultiple>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                          Color
                        </Box>
                        {isExpanded ? (
                          <FiMinus fontSize='12px' />
                        ) : (
                          <GrFormAdd fontSize='12px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <CheckboxGroup >
                        <Stack spacing={5} direction={"column"} onChange={(e)=>{
                          let obj = {}
                          if(e.target.checked){
                            const color = Symbol("color");
                            obj.color = e.target.value;
                          }
                          console.log(obj)
                          axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens?brand=Mens`,{
                            params:{
                              ...obj
                            }
                          })
                          .then((res) => {
                            console.log(res)
                            setState(res.data)
                          })
                          .catch((err) => console.log(err))
                          }}>
                          <Checkbox value='Black'>Black</Checkbox>
                          <Checkbox value='Blue'>Blue</Checkbox>
                          <Checkbox value='Brown'>Brown</Checkbox>
                          <Checkbox value='Orange'>Orange</Checkbox>
                        </Stack>
                      </CheckboxGroup>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                          Productline
                        </Box>
                        {isExpanded ? (
                          <FiMinus fontSize='12px' />
                        ) : (
                          <GrFormAdd fontSize='12px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <CheckboxGroup >
                        <Stack spacing={5} direction={"column"} onChange={(e)=>{
                          let obj = {}
                          if(e.target.checked){
                            obj["productline"] = e.target.value;
                          }
                          console.log(obj)
                          axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens?brand=Mens`,{
                            params:{
                              ...obj
                            }
                          })
                          .then((res) => {
                            console.log(res)
                            setState(res.data)
                          })
                          .catch((err) => console.log(err))
                          }}>
                          <Checkbox value='Adidas'>Adidas</Checkbox>
                          <Checkbox value='Puma'>Puma</Checkbox>
                          <Checkbox value='Reebok'>Reebok</Checkbox>
                          <Checkbox value='Nike'>Nike</Checkbox>
                        </Stack>
                      </CheckboxGroup>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                          Section 2 title
                        </Box>
                        {isExpanded ? (
                          <FiMinus fontSize='12px' />
                        ) : (
                          <GrFormAdd fontSize='12px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                          Section 2 title
                        </Box>
                        {isExpanded ? (
                          <FiMinus fontSize='12px' />
                        ) : (
                          <GrFormAdd fontSize='12px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
          <SimpleGrid>
            {state.map((item) => <Image src={item.image} />)}
          </SimpleGrid>
        </Flex>
      </Box>

      <Footer />
    </div>
  )
}

export default Menspage