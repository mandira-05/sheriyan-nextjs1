"use client"
import React,{ useState,useContext } from 'react';
import Header from '@/Components/Header'  ///pehle k example me use kia tha ye
import {MyContext} from "@/Helper/Context"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify = () => {
    //console.log("heheheh")
    //toast("Login successful");
    toast.success('🦄 Wow so easy!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});

  }
  
  //const [num,setNum] = useState(10);

  //const user = useContext(MyContext)
  //console.log(user);

  return (

    <div>
      <button onClick={notify}>Login</button>
      <ToastContainer />
    </div>
    )
}

export default page

