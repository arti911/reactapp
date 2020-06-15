import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav__list">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/price">
          <li>Price</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;