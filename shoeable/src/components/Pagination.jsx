import React from 'react'
import { Button } from '@chakra-ui/react';
const Pagination = ({totalpage,current, setPage}) => {
    console.log(totalpage,current);
  return (
    <div>
      <Button isDisabled={current === 1} onClick={()=>setPage(current-1)}>Prev</Button>
      
      <>{
        new Array(totalpage).fill(0).map((item,index)=>{
        return <Button isDisabled = {index+1 == current} onClick={(e)=>{setPage(e.target.textContent)}}>{index+1}</Button>
      })}
      </>
      
      
      <Button isDisabled = {current == totalpage} onClick={()=>setPage(current-1)}>Next</Button>
    </div>
  )
}

export default Pagination