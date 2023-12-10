"use client"
import React,{ useState,useContext } from 'react';

import Nav from './Nav'
import {MyContext} from "@/Helper/Context"

const Header = (props) => {
  //console.log(props.num)
  const user = useContext(MyContext)

  return (

    <div className='bg-green-200 p-5'>
     {/*  jaate nhi kahi rishte purane
      <Nav num={props.num}  /> */}
      {user}
    </div>
    )
}

export default Header
