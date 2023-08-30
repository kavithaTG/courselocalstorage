import React from 'react'
import { Link} from 'react-router-dom'


const Nav = () => {
  return (
    <div className="navmaindiv">
        <div className="navroutediv">
            <ul id="ultag">
             
                {/* <li><Link href="./Admindata.jsx">Admin</Link></li>
                <li><Link href="./Enrolldata.jsx">Enroll</Link></li> */}
               <li><Link to="/Admin">Admindata</Link></li>
               <li><Link to="/">Enrolldata</Link></li>
               <li><Link to="/Detail">Detail</Link></li>

            </ul>

        </div>
    </div>
  )
}

export default Nav