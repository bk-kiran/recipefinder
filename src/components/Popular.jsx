import React, { useEffect, useState } from 'react'
import './popular.css'
import { Splide, SplideSlide}  from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Link } from "react-router-dom"

const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch ('https://api.spoonacular.com/recipes/random?apiKey=a5d29a7bccf54854b11bf21d2ca7f654&number=7');
        const data = await api.json()
        setPopular(data.recipes)
        console.log(data.recipes)
    
    }   


    return (
        <div className='popularcontainer'>
            <h3>Trending Recipes 🍔</h3>
            <Splide options={{perPage:4, pagination: false, drag: 'free', gap: '5rem'}}>
                {popular.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <div className='popularcards'>
                                <Link to={'/recipe/' + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}></img>
                                    <div className='populargradient'>
                                    </div>
                                </Link>
                            </div>
                        </SplideSlide>
                )})}
            </Splide>
        </div>
    )
}

export default Popular
