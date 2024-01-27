import React from 'react'
import './Category.css'
import {NavLink} from 'react-router-dom'

const Category = () => {
  return (
    <div className='containerCategory'>
        <h3>Select Cuisine 🌎</h3>
        <div className='CategoryGrid'>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/african'}>
                    <h1>🌍</h1> 
                    <h4>African</h4>
                </NavLink>
            </div>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/american'}>
                    <h1>🇺🇸</h1> 
                    <h4>American</h4>
                </NavLink>
            </div>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/british'}>
                    <h1>🇬🇧</h1>
                    <h4>British</h4>
                </NavLink>
            </div>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/chinese'}>
                    <h1>🇨🇳</h1>
                    <h4>Chinese</h4>
                </NavLink>
            </div>

            <div className='CategoryCard'>
                <NavLink to={'/cuisine/french'}>
                    <h1>🇫🇷</h1>
                    <h4>French</h4>
                </NavLink>
            </div>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/german'}>
                    <h1>🇩🇪</h1>
                    <h4>German</h4>
                </NavLink>
            </div>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/greek'}>
                    <h1>🇬🇷</h1>
                    <h4>Greek</h4>
                </NavLink>
            </div>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/indian'}>
                    <h1>🇮🇳</h1>
                    <h4>Indian</h4>
                </NavLink>
            </div>

            <div className='CategoryCard'>
                <NavLink to={'/cuisine/italian'}>
                    <h1>🇮🇹</h1>
                    <h4>Italian</h4>
                </NavLink>
            </div>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/japanese'}>
                    <h1>🇯🇵</h1>
                    <h4>Japanese</h4>
                </NavLink>
            </div>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/korean'}>
                    <h1>🇰🇷</h1>
                    <h4>Korean</h4>
                </NavLink>
            </div>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/mediterranean'}>
                    <h1>🇹🇷</h1>
                    <h4>Mediterranean</h4>
                </NavLink>
            </div>

            <div className='CategoryCard'>
                <NavLink to={'/cuisine/mexican'}>
                    <h1>🇲🇽</h1>
                    <h4>Mexican</h4>
                </NavLink>
            </div>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/middle eastern'}>
                    <h1>🐪</h1>
                    <h4>Middle Eastern</h4>
                </NavLink>
            </div>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/spanish'}>
                    <h1>🇪🇸</h1>
                    <h4>Spanish</h4>
                </NavLink>
            </div>
            <div className='CategoryCard'>
                <NavLink to={'/cuisine/thai'}>
                    <h1>🇹🇭</h1>
                    <h4>Thai</h4>
                </NavLink>
            </div>

        </div>
    </div>


  )
}

export default Category
