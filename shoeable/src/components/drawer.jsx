import {
    Button,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import {GiHamburgerMenu} from "react-icons/gi"
import React from 'react'
import { useNavigate,Link as RouteLink } from 'react-router-dom';
export default function DrawerExample({data}) {
    const Navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='black' onClick={onOpen}>
          <GiHamburgerMenu/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody>
              <Button onClick={()=>Navigate("/singup")}>Create Your Account</Button>
              <div>
                {data.map((item)=>{

                  return <div style={{fontSize:"2rem",fontWeight:"3rem"}} key={Math.random+item.title}><RouteLink to={item.to}>{item.title}</RouteLink></div>
                })}
              </div>
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
  }