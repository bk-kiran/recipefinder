import React from 'react'
import Home from './main.jsx'
import { Route, Routes} from "react-router-dom"
import Searched from './Searched.jsx'
import Recipes from './Recipes.jsx'
import Cuisine from './Cuisine.jsx'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cuisine/:type' element={<Cuisine/>}/>
      <Route path='/searched/:search' element={<Searched/>}/>
      <Route path='/recipe/:name' element={<Recipes />}/>
    </Routes>
  )
}

export default Pages
