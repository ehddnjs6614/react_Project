import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <div className="header">
        <h1>
          <a href="#">DESIGN service</a>
        </h1>
        <div className="nav">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">BEDROOM</a>
            </li>
            <li>
              <a href="#">DINING</a>
            </li>
            <li>
              <a href="#">KITCHEN</a>
            </li>
            <li>
              <a href="#">BACKYARD</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
