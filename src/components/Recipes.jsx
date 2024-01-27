import React from 'react'
import './Recipe.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipes = () => {

  let params = useParams()
  const [details, setDetails] = useState({})
  const [activeButton, setActiveButton] = useState('instructions');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=a5d29a7bccf54854b11bf21d2ca7f654`)
    const detailData = await data.json()
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails();
}, [params.name]);


  return (
    <section className='recipepage' id="aboutpage">
        <div className='recipepagecontent'>
            <img src={details.image}/> 
            <p>Serves: <span>{details.servings} people</span></p>
            <p>Ready In: <span>{details.readyInMinutes} minutes</span></p>
            <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
            <p>Source Name: <span>{details.sourceName}</span></p>
            <p>Source Link: <a>{details.sourceUrl}</a></p>
        </div>
        <div className='recipepagetext'>
          <p className='recipepagetitle'>{details.title}</p>
          <p>Health Score: <span>{details.healthScore}</span></p>
          <div className='recipepagebuttoncontainer'>
            <button className={activeButton === 'instructions' ? 'active' : ''} onClick={() => handleButtonClick('instructions')}>Instructions</button>
            <button className={activeButton === 'ingredients' ? 'active' : ''} onClick={() => handleButtonClick('ingredients')}>Ingredients</button>
          </div>
          {activeButton === 'instructions' && (
            <p className='recipepagesummary' dangerouslySetInnerHTML={{__html: details.instructions}}></p>
          )}
          {activeButton === 'ingredients' && (
            <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
            </ul>
          )}
        </div>
    </section>


  )
}

export default Recipes
