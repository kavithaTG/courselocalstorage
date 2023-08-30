import React from 'react'
import { useState } from 'react'

import {useNavigate} from "react-router-dom"


const Register = () => {
    let [firstname,setFirstname]=useState()
    let [lastname,setLastname]=useState()
    let [number,setNumber]=useState()
    let [education,setEducation]=useState()
    let [year,setYear]=useState()
    let [course,setCourse]=useState()
    let navigate=useNavigate()

    
    let handledetail=(e)=>{
        e.preventDefault()
        console.log(firstname,lastname,number,education,year,course);
        localStorage.setItem("firstname",firstname);
        localStorage.setItem("lastname",lastname);
        localStorage.setItem("number",number);
        localStorage.setItem("education",education);
        localStorage.setItem("year",year);
        localStorage.setItem("course",course)
        // localStorage.setItem("payload",payload)
        navigate("/");
    }
  return (
    <div className="registermaindiv">
        <div className="registerformdiv">
            
            <form action="register">
                <label htmlFor="firstname"></label>
                <input type="text" name='firstname'  onChange={(e)=>{setFirstname(e.target.value)}} placeholder='enter firstname'/> <br />
                <label htmlFor="lastname"></label>
                <input type="text"  name='lastname' onChange={(e)=>{setLastname(e.target.value)}} placeholder='enter lastname'/><br />
                <label htmlFor="number"></label>
                <input type="number" name='number' onChange={(e)=>{setNumber(e.target.value)}} placeholder='enter number'/><br />
                <select name="education" onChange={(e)=>{setEducation(e.target.value)}}>
                    <option value="BE">BE</option>
                    <option value="Btech">Btech</option>
                    <option value="BCA">BCA</option>
                    <option value="BSC">BSC</option>
                    <option value="other">other</option>
                </select><br />
                <select name="year" id="" onChange={(e)=>{setYear(e.target.value)}}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select><br />
                <select name="course" id="" onChange={(e)=>{setCourse(e.target.value)}}>
                    <option value="MERN Full Stack">MERN Full Stack</option>
                    <option value="JAVA Full Stack">JAVA Full Stack</option>
                    <option value="PYTHON">PYTHON</option>
                    <option value="Testing">Testing</option>
                    <option value="Non-IT">Non-IT</option>
                </select><br />
                <button onClick={handledetail}>Add</button>
            </form>
            
        </div>
        
       
    </div>
  )
}

export default Register