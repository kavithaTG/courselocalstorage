import React from 'react'
import {BrowserRouter as Router,Routes,Route, Outlet} from "react-router-dom"
import Nav from './Nav'
import Enrolldata from './Enrolldata'
import Admindata from './Admindata'
import "./Global.css"
import Course from './Course'
import Login from './Login'
import Register from './Register'
import Detail from './Detail'
import Dashboard from './Dashboard'
const App = () => {
  return (
    <div className="appdiv">
        <div className="routemain">
            
            <Router>
             <Nav/>
              <Routes>
                 <Route path="/Admin" element={<Admindata/>}></Route>
                 <Route path="/" element={<Enrolldata/>}></Route>
                 <Route path="/Course" element={<Course/>}></Route>
                 <Route path='/Login' element={<Login/>}></Route>
                 <Route path="/Register" element={<Register/>}></Route>
                <Route path="/Detail" element={<Detail/>}></Route>
                <Route path='/Dashboard' element={<Dashboard/>}></Route>
              </Routes>
            </Router>
            
          
        </div>
       
    </div>
  )
}

export default App