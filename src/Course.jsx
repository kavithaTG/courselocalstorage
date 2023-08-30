import React from 'react'
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <div className="coursediv">
      <div className="coursetype">
        <ol>
          <h1>Courses Available..</h1>
          <li>MERN Full Stack</li>
          <li>JAVA Full Stack</li>
          <li>PYTHON Devloper</li>
          <li>Non-IT Training</li>
          <li>Testing</li>
          <li><Link to="/Register">click here</Link>to Register</li>
        </ol>
      </div>
        
    </div>
  )
}

export default Course