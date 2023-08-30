import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let[stu_Email,setEmail]=useState()
  let[stu_Password,setPassword]=useState()
  const navigate=useNavigate()

  let handlelogin=(e)=>{
    e.preventDefault()
    console.log(stu_Email,stu_Password);
    let email=localStorage.getItem("enroll_EMAIL")
    let  password=localStorage.getItem("enroll_PASSWORD")
    console.log(email,password);
    if(stu_Email === email && stu_Password === password)
    {
        alert("Login ok")
        navigate("/Register")

    }
    else{
        alert("YAVO EVELLA..?")
        
    }

  }
  return (
    <div className="loginmain">
        <div className="loginformdiv">
            <form action="login">
                <label htmlFor="email"></label>
                    <input type="email" name='stu_Email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' required/> <br />
                    <label htmlFor="password"></label>
                    <input type="password" name="stu_Password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' required/>
                    <button onClick={handlelogin}>submit</button>
                

            </form>
        </div>
    </div>
  )
}

export default Login