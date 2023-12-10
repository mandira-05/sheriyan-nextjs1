"use client"
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Link from 'next/Link';

const page = ({params}) => {
   //console.log(params.id);
  const {id} = params;
  const [users,setUsers] = useState([])
    const getUsers = async() => {
    
      const res = await axios.get("https://jsonplaceholder.typicode.com/users/" +id)
      const data = res.data
      setUsers(data)
      //setUsers(data.username)
      //console.log(data.username)
      //console.log(data)
  }
  
  useEffect (() => {
    getUsers()
  }, [])
 



  return <>{JSON.stringify(users)}</> 
    
};

export default page
