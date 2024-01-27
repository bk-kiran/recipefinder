import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import './Searched.css'
import { Link } from "react-router-dom"

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    const params = useParams();

    const getCuisine= async (name) => {
        const data = await fetch ( `https://api.spoonacular.com/recipes/complexSearch?apiKey=a5d29a7bccf54854b11bf21d2ca7f654&cuisine=${name}`);
        const recipes = await data.json()
        setCuisine(recipes.results)
    }  

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])


  return (
    <section>
        <div className='searchedContainer'>
            <h1>Results for {params.type} cuisine </h1>
        </div>
        <div className='searchGrid'>
            {cuisine.map((item) => {
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

export default Cuisine
