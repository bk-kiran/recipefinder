import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import './Search.css'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [input, setInput] = useState("");
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/searched/'+input)
    }

  return (
    <div className='searchbar' onSubmit={submitHandler}>
        <form>
            <FaSearch></FaSearch>
            <input 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input} placeholder='Enter Recipes'/>
        </form>
        <p>Search for recipes! If you have any dietary requirements add it to your search query (such as vegan burger)</p>
    </div>
  )
}

export default Search
