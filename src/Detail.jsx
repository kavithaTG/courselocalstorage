import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Detail = () => {

    let[name,setName]=useState()
    let[number,setNumber]=useState()
    let navigate=useNavigate()

    let handledetail=(e)=>{
        e.preventDefault()
        let Firstname=localStorage.getItem("firstname")
       
        let Number=localStorage.getItem("number")
        console.log(Firstname,Number);
        if(Firstname === name && Number === number){
            alert("record matching..")
            navigate("/Dashboard")
            
        }
        else{
            alert("record not matching..")
        }
    }
  return (
   <div className="detailmain">
    <div className="detailformdiv">
        <form action="detail">
            <label htmlFor="name"></label>
            <input type="name" name="name" onChange={(e)=>{setName(e.target.value)}} placeholder='enter Name'/> <br />
            <label htmlFor="number"></label>
            <input type="number" name="number" onChange={(e)=>{setNumber(e.target.value)}} placeholder='enter Number'/> <br />
            <button onClick={handledetail}>check</button>
        </form>
    </div>
   </div>
  )
}

export default Detail