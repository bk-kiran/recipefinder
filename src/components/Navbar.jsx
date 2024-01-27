import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <p className = 'logo'>👨‍🍳 <span>recipe finder</span></p>
        <p className = 'menu'>👨‍💻 <span>built with spoonacular API</span></p>
    </nav>
  )
}

export default Navbar
