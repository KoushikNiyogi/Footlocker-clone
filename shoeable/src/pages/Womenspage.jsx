import React, { useEffect, useState } from 'react'
import axios from "axios"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { Box, Stack, Heading, Text, Divider, Flex, Image, SimpleGrid, Hide, Button, Select } from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react'
import Filter from '../components/Filter'
import { Link as RouterLink } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Pagination from '../components/Pagination'

const Womenspage = () => {
  const {dispatch} = useContext(AuthContext)
  const [state, setState] = useState([])
  const [showfilter, Togglefilter] = useState(false);
  const [page,setPage] = useState(1);
  const [totalpage,setTotalpage] = useState(0);

  const handleChange = (e) => {
    let select = e.target.value;
    if (select === "A to Z") {
      axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens?brand=Womens&_sort=name&_order=asc`)
        .then((res) => {
          console.log(res.data);
          setState(res.data);
        })
        .catch((err) => console.log(err))
    }
    if (select === "Z to A") {
      axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens?brand=Womens&_sort=name&_order=desc`)
        .then((res) => {
          console.log(res.data);
          setState(res.data);
        })
        .catch((err) => console.log(err))
    }
    if (select === "asc") {
      axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens?brand=Womens&_sort=price&_order=asc`)
        .then((res) => {
          console.log(res.data);
          setState(res.data);
        })
        .catch((err) => console.log(err))
    }
    if (select === "desc") {
      axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens?brand=Womens&_sort=price&_order=desc`)
        .then((res) => {
          console.log(res.data);
          setState(res.data);
        })
        .catch((err) => console.log(err))
    }
    if (select === "") {
      axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens?brand=Womens`)
        .then((res) => {
          console.log(res.data);
          setState(res.data);
        })
        .catch((err) => console.log(err))
    }
  }
  useEffect(() => {

    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens?brand=Womens`)
      .then((res) => {
        let totalCount = res.data.length;
        setTotalpage(Math.ceil(totalCount/8));
      })
      .catch((err) => console.log(err))

      axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens?brand=Womens&_page=${page}&_limit=8`)
      .then((res) => {
        
        setState(res.data)

      })
      .catch((err) => console.log(err))
  }, [page])
  return (
    <div>
      <Navbar/>
      
      <Box>

        <Flex direction={{ base: 'column', lg: "row" }}>

          <Box width={{ base: '100%', lg: "20%" }}>
            <Hide below='lg'>
              <Filter setState={setState} />
            </Hide>

            {showfilter && <Filter setState={setState} />}
          </Box>
          <Box width={{ base: '100%', lg: "80%" }}>
            <Flex border={"1px solid red"} justifyContent={"flex-end"}>
              <Hide above='lg'>
                <Button onClick={() => Togglefilter(!showfilter)}>{showfilter ? "Hide filters" : "Show Filters"}</Button>
              </Hide>
              <Select ml={"20px"} placeholder='Select option' width={"40%"} onChange={(e) => handleChange(e)}>
                <option value='A to Z'>Alphabeticalorder A to Z</option>
                <option value='Z to A'>Alphabeticalorder Z to A</option>
                <option value='asc'>Prices Ascending</option>
                <option value="desc">Prices Descending</option>
              </Select>
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
              {state.map((item) =>

                <RouterLink to={`/product/:${item.id}`} >
                 <Card maxW='sm' textAlign={"left"} onClick={()=>dispatch({type:"brand",payload:"Mens"})}>
                  <CardBody>
                  <Box backgroundColor={"#f5f5f5"}>
                    <Image
                      src={item.image}
                      alt={item.title}
                    />
                  </Box>

                  <Divider />
                  <Box>
                    <Stack mt='6'>
                      <Heading size='md'>{item.name}</Heading>
                      <Text color='black' fontSize='md'>
                        {item.brand} {item.color}
                      </Text>
                      <Text color='black' fontSize='md'>
                        ${item.price}
                      </Text>
                    </Stack>
                  </Box>

                </CardBody>
              </Card>
              </RouterLink>
              )}
          </SimpleGrid>
          <Pagination mt={"10px"}  mb={"10px"} current = {page} setPage = {setPage} totalpage={totalpage}/>
      </Box>

    </Flex>
      </Box >
      <Footer/>
    </div>
  )
}

export default Womenspage