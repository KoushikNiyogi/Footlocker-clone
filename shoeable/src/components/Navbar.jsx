import React, { useState } from 'react'
import "./Navbar.css"
import DrawerExample from './drawer'
import { NavLink, Link as RouterLink, useNavigate } from "react-router-dom";
import { Input, Stack, InputGroup, InputRightAddon, Text ,Divider,Button } from '@chakra-ui/react';
import { BsSearch, BsFillCartFill, BsHeart } from 'react-icons/bs';
import Login from "../pages/Login"
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';
import axios from 'axios';
const navbar = [
  { to: "/mens", title: "Men's" },
  { to: "/womens", title: "Women's" },
  { to: "/kids", title: "Kid's" },
  { to: "/clothing", title: "Clothing" },
  { to: "/*", title: "Fan Shop" },
  { to: "/*", title: "Sale" },
  { to: "/*", title: "New Arrival" }]

const Navbar = ({setState}) => {
  const {state,dispatch} = useContext(AuthContext);
  const{isAuth,username} = state;
  const [text,setText] = useState();
  const Navigate = useNavigate();
  const handleSearch = (e)=>{
    setText(e.target.value);
  }
  const handlesearchClick = ()=>{
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Mens?brand=Mens&q=${text}`)
    .then((res)=>{
      console.log(res.data);
      setState(res.data)})
    .catch((res)=>console.log(res));
  }
  return (

    <nav>
      <div className='top_section_text'>   
        <Text fontSize='sm' mr="1rem">Find Store</Text>
        <Text fontSize='sm' mr="1rem">{isAuth ? <Button bg={"black"} color={"white"} onClick={()=>dispatch({type:"LogoutUser"})}>Hi {username}, Logout</Button>:<Login/>}</Text>
        <Text fontSize='sm' mr="1rem">Customer Service</Text>

      </div>
      <Divider />
      <div>
        <div>
          <div className="icon" onClick={()=>Navigate("/")}>
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
              <Input placeholder='mysite' backgroundColor="white" color="black" onChange={(e)=>handleSearch(e)}/>
              <InputRightAddon backgroundColor="black" children={<BsSearch />} onClick={()=>handlesearchClick()}/>
            </InputGroup>
          </Stack>
          <RouterLink to="/wishlist"><BsHeart /></RouterLink>
          <RouterLink to="/cart"><BsFillCartFill /></RouterLink>
        </div>

        <div className='media_searchbar'>
          <Stack spacing={4}>
            <InputGroup>
              <Input placeholder='mysite' backgroundColor="white" color="black" onChange={(e)=>handleSearch(e)}/>
              <InputRightAddon backgroundColor="black" children={<BsSearch />} onClick={()=>handlesearchClick()}/>
            </InputGroup>
          </Stack>
        </div>
      </div>

    </nav>

  )
}

export default Navbar