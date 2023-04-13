import React from 'react'
import { FiMinus } from "react-icons/fi"
import { GrFormAdd } from "react-icons/gr"
import axios from "axios"
import { Box, CheckboxGroup, Stack, Checkbox, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react'

const Filter = ({setState}) => {
    return (
        <div>
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
                                    <Stack spacing={5} direction={"column"} onChange={(e) => {
                                        let obj = {}
                                        if (e.target.checked) {
                                            obj.color = e.target.value;
                                        }
                                        axios.get(`https://shoeable-server.onrender.com/products?brand=Mens`, {
                                            params: {
                                                ...obj
                                            }
                                        })
                                            .then((res) => {
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
                                    <Stack spacing={5} direction={"column"} onChange={(e) => {
                                        let obj = {}
                                        if (e.target.checked) {
                                            obj["productline"] = e.target.value;
                                        }
                                        axios.get(`https://shoeable-server.onrender.com/products?brand=Mens`, {
                                            params: {
                                                ...obj
                                            }
                                        })
                                            .then((res) => {
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
                                        Price
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
                                    <Stack spacing={5} direction={"column"} onChange={(e) => {
                                        let select
                                        if (e.target.checked) {
                                            select = e.target.value;
                                        }
                                        console.log(select)
                                        if (select === '50-75') {
                                            axios.get(`https://shoeable-server.onrender.com/products?brand=Mens&price_gte=50&price_lte=75`)
                                                .then((res) => {
                                                    setState(res.data)
                                                })
                                                .catch((err) => console.log(err))
                                        }
                                        if (select === '75-100') {
                                            axios.get(`https://shoeable-server.onrender.com/products?brand=Mens&price_gte=76&price_lte=100`)
                                                .then((res) => {
                                                    setState(res.data)
                                                })
                                                .catch((err) => console.log(err))
                                        }
                                        if (select === '100-125') {
                                            axios.get(`https://shoeable-server.onrender.com/products?brand=Mens&price_gte=101&price_lte=125`)
                                                .then((res) => {
                                                    console.log(res.data)
                                                    setState(res.data)
                                                })
                                                .catch((err) => console.log(err))
                                        }
                                        if (select === '125-150') {
                                            axios.get(`https://shoeable-server.onrender.com/products?brand=Mens&price_gte=126&price_lte=150`)
                                                .then((res) => {
                                                    setState(res.data)
                                                })
                                                .catch((err) => console.log(err))
                                        }
                                        if (select === '>150') {
                                            axios.get(`https://shoeable-server.onrender.com/products?brand=Mens&price_gte=151&price_lte=200`)
                                                .then((res) => {
                                                    console.log(res.data)
                                                    setState(res.data)
                                                })
                                                .catch((err) => console.log(err))
                                        }
                                        if (select === undefined) {
                                            axios.get(`https://shoeable-server.onrender.com/products?brand=Mens`)
                                                .then((res) => {
                                                    console.log(res.data)
                                                    setState(res.data)
                                                })
                                                .catch((err) => console.log(err))
                                        }
                                    }}>
                                        <Checkbox value='50-75'>$50-$75</Checkbox>
                                        <Checkbox value='75-100'>$75-$100</Checkbox>
                                        <Checkbox value='100-125'>$100-$125</Checkbox>
                                        <Checkbox value='125-150'>$125-$150</Checkbox>
                                        <Checkbox value='>150'>Greater than 150</Checkbox>
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
                                        Rating
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
                                    <Stack spacing={5} direction={"column"} onChange={(e) => {
                                        let select
                                        if (e.target.checked) {
                                            select = e.target.value;
                                        }
                                        console.log(select)
                                        if (select === '1-2') {
                                            axios.get(`https://shoeable-server.onrender.com/products?brand=Mens&rating.rate_gte=1&rating.rate_lte=2`)
                                                .then((res) => {
                                                    setState(res.data)
                                                })
                                                .catch((err) => console.log(err))
                                        }
                                        if (select === '2-3') {
                                            axios.get(`https://shoeable-server.onrender.com/products?brand=Mens&rating.rate_gte=2&rating.rate_lte=3`)
                                                .then((res) => {
                                                    setState(res.data)
                                                })
                                                .catch((err) => console.log(err))
                                        }
                                        if (select === '3-4') {
                                            axios.get(`https://shoeable-server.onrender.com/products?brand=Mens&rating.rate_gte=3&rating.rate_lte=4`)
                                                .then((res) => {
                                                    console.log(res.data)
                                                    setState(res.data)
                                                })
                                                .catch((err) => console.log(err))
                                        }
                                        if (select === '4-5') {
                                            axios.get(`https://shoeable-server.onrender.com/products?brand=Mens&rating.rate_gte=4&rating.rate_lte=5`)
                                                .then((res) => {
                                                    setState(res.data)
                                                })
                                                .catch((err) => console.log(err))
                                        }

                                        if (select === undefined) {
                                            axios.get(`https://shoeable-server.onrender.com/products?brand=Mens`)
                                                .then((res) => {
                                                    console.log(res.data)
                                                    setState(res.data)
                                                })
                                                .catch((err) => console.log(err))
                                        }
                                    }}>
                                        <Checkbox value='1-2'>1-2</Checkbox>
                                        <Checkbox value='2-3'>2-3</Checkbox>
                                        <Checkbox value='3-4'>3-4</Checkbox>
                                        <Checkbox value='4-5'>4-5</Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Filter