import React from 'react'
import './main.css'
import Popularsection from './Popular.jsx'
import Searchbar from './Search.jsx'
import Category from './Category.jsx'
import Navbar from './Navbar.jsx'
import Vegan from './Vegan.jsx'
import Dessert from './Dessert.jsx'

const main = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Searchbar/>
      <Popularsection/>
      <Vegan/>
      <Dessert/>
      <Category/>
    </div>

  )
}

export default main
