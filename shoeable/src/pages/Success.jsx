import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Box, Spinner, Text, AspectRatio,Image } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
const Success = () => {
    const Navigate = useNavigate()
    const { state, dispatch } = useContext(AuthContext);
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        dispatch({ type: "cartid", payload: [] })
        setTimeout(() => {
            setFlag(true)
        }, 2000);
        setTimeout(() => {
           Navigate("/")
        }, 4000);
    }, [])
    return (
        <div>
            <Navbar />
            <Box>
                {
                    flag === false ? <Spinner size='xl' /> : <Box>
                        <Text fontSize={"4xl"}>PAYMENT SUCCESSFUL</Text>
                            <Image
                                border = {"1px solid black"}
                                width={"50%"}
                                margin={"Auto"}
                                title='naruto'
                                src='https://media.tenor.com/xVfFIHxAzW4AAAAC/success.gif'
                                allowFullScreen
                            />
                            <Text fontSize={"2xl"}>Order placed</Text>
                    </Box>
                }
            </Box>
            <Footer />
        </div>
    )
}

export default Success