import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div> <ul>
      <li>
        <Link to='/about'>About     </Link>
      <Link to='/home'>Home</Link>
      </li>
    </ul>
        </div>
  )
}

export default Navbar