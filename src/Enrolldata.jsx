import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import  {axiosInstance} from "../src/Axios"


const Enrolldata = () => {
   const navigate=useNavigate()
     const [enroll_ID,setEnroll_id]=useState()
     const [enroll_NAME,setEnroll_name]=useState()
     const [enroll_PHONE,setEnroll_phone]=useState()
     const [enroll_EMAIL,setEnroll_email]=useState()
     const [enroll_PASSWORD,setEnroll_password]=useState()

    //  let payload={
    //     enroll_id:enroll_ID,
    //     enroll_name:enroll_NAME,
    //     enroll_phone:enroll_PHONE,
    //     enroll_email:enroll_EMAIL,
    //     enroll_paswodr:enroll_PASSWORD
    //  }

     let handledata=(e)=>{
         e.preventDefault()
    console.log(enroll_ID,enroll_NAME,enroll_PHONE,enroll_EMAIL,enroll_PASSWORD);
   let data=window.localStorage.setItem("enroll_EMAIL",enroll_EMAIL)
 localStorage.setItem("enroll_PASSWORD",enroll_PASSWORD)
 console.log(data);
 if(enroll_ID != null || enroll_NAME != null || enroll_PHONE != null ||  enroll_EMAIL != null || enroll_PASSWORD != null)
 {
  alert("Registration success!!")
  navigate("/Course")
 }
 else{
  alert("YAVO EVELLA..?")
 }
   
   

    // const data=axiosInstance.post("/posts",payload)
    // console.log(data);
     }
  return (
    <div className="enrolldatadiv">
        <div className="enrollformdiv">
            <form action="Enroll" >
                <label htmlFor="enroll_ID"> </label>
                {/* <fieldset type="number" >
                  <legend>id</legend>
                  </fieldset> */}
                    <input type="number" name='enroll_ID' placeholder='ID' onChange={(e)=>{setEnroll_id(e.target.value)}}/> <br />
                    <label htmlFor="enroll_NAME"></label>
                    <input type="text" name='enroll_NAME' placeholder="NAME" onChange={(e)=>{setEnroll_name(e.target.value)}}/><br />
                    <label htmlFor="enroll_phone"></label>
                    <input type="number" name='enroll_PHONE'placeholder='PHONE' onChange={(e)=>{setEnroll_phone(e.target.value)}}/><br />
                    <label htmlFor="enroll_email"></label>
                    <input type="email" name='enroll_EMAIL'placeholder='EMAIL' onChange={(e)=>{setEnroll_email(e.target.value)}}/><br />
                    <label htmlFor="password"></label>
                    <input type="password"  name='enroll_PASSWORD' placeholder='PA' onChange={(e)=>{setEnroll_password(e.target.value)}}/><br />
                    <button onClick={handledata}>Submit</button>
                    
                
            </form>
        </div>
    </div>
  )
}

export default Enrolldata