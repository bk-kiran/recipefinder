import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Searched.css'
import { Link } from "react-router-dom"

const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const params = useParams();

    const getSearched = async (name) => {
        const data = await fetch ( `https://api.spoonacular.com/recipes/complexSearch?apiKey=a5d29a7bccf54854b11bf21d2ca7f654&query=${name}`);
        const recipes = await data.json()
        setSearchedRecipes(recipes.results)
    }  

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])
    

  return (
    <section>
        <div className='searchedContainer'>
            <h1>Results for {params.search} </h1>
        </div>
        <div className='searchGrid'>
            {searchedRecipes.map((item) => {
                return (
                    <div key={item.id} className='searchCard'>
                        <Link to={'/recipe/' + item.id}>
                            <img src={item.image} alt=""/>
                            <h4>{item.title}</h4>
                        </Link>
                    </div>

            )
        })}
        </div>

    </section>
  )
}

export default Searched
