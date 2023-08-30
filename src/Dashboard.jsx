import React from 'react'

const Dashboard = () => {

 
   let Firstname=localStorage.getItem("firstname")
   let Lastname=localStorage.getItem("lastname")
   let Number=localStorage.getItem("number")
   let Education=localStorage.getItem("education")
   let Year=localStorage.getItem("year")
   let Course=localStorage.getItem("course")
   

//   let data="kavotha"

  return (
    <div className="dashboarddiv">
        <div className="tablediv">
            <table style={{border:"2px solid black"}}>
                <thead style={{border:"1px solid black"}}>
                <tr >
                    <th style={{border:"1px solid black"}}>First name</th>
                    <th style={{border:"1px solid black"}}>Last name</th>
                    <th style={{border:"1px solid black"}}>number</th>
                    <th style={{border:"1px solid black"}}>education</th>
                    <th style={{border:"1px solid black"}}>year</th>
                    <th style={{border:"1px solid black"}}>course</th>
                </tr> 
                </thead>
                <tbody style={{border:"1px solid black"}}>
                    
                    <tr>
                     <td>{Firstname}</td>
                     <td>{Lastname}</td>
                     <td>{Number}</td>
                     <td>{Education}</td>
                     <td>{Year}</td>
                     <td>{Course}</td>
                    
                    </tr>
                </tbody>
           
            </table>
           
        </div>
        
    </div>
  )
}

export default Dashboard