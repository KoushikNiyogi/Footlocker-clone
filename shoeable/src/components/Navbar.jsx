import React from 'react'
import "./Navbar.css"
import DrawerExample from './drawer'
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Input, Stack, InputGroup, InputRightAddon, Text ,Divider } from '@chakra-ui/react';
import { BsSearch, BsFillCartFill, BsHeart } from 'react-icons/bs';
import Login from "../pages/Login"
const navbar = [
  { to: "/mens", title: "Men's" },
  { to: "/womens", title: "Women's" },
  { to: "/kids", title: "Kid's" },
  { to: "/clothing", title: "Clothing" },
  { to: "/*", title: "Fan Shop" },
  { to: "/*", title: "Sale" },
  { to: "/*", title: "New Arrival" }]

const Navbar = () => {
  return (

    <nav>
      <div className='top_section_text'>   
        <Text fontSize='sm' mr="1rem">Find Store</Text>
        <Text fontSize='sm' mr="1rem"><Login/></Text>
        <Text fontSize='sm' mr="1rem">Customer Service</Text>

      </div>
      <Divider />
      <div>
        <div>
          <div className="icon">
            <h2 >Shoeable</h2>
          </div>

          <div id="displayAccount">
            <RouterLink to="/wishlist"><BsHeart /></RouterLink>
            <RouterLink to="/cart"><BsFillCartFill /></RouterLink>
            <DrawerExample data={navbar}/>
          </div>

        </div>


        <div className="mid_section"  >

          {navbar.map((link) => {
            return <NavLink
              to={link.to}
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none", backgroundColor: "white", color: "black" }
                  : { textDecoration: "none", backgroundColor: "black", color: "white" };
              }}
              key={Math.random()+link.title+link.to}
            >
              {link.title}
            </NavLink>
          })}

        </div>

        <div className='left_section'  >
          <Stack spacing={4}>
            <InputGroup size='sm'>
              <Input placeholder='mysite' backgroundColor="white" color="black" />
              <InputRightAddon backgroundColor="black" children={<BsSearch />} />
            </InputGroup>
          </Stack>
          <RouterLink to="/wishlist"><BsHeart /></RouterLink>
          <RouterLink to="/cart"><BsFillCartFill /></RouterLink>
        </div>

        <div className='media_searchbar'>
          <Stack spacing={4}>
            <InputGroup>
              <Input placeholder='mysite' backgroundColor="white" color="black" />
              <InputRightAddon backgroundColor="black" children={<BsSearch />} />
            </InputGroup>
          </Stack>
        </div>
      </div>

    </nav>

  )
}

export default Navbar