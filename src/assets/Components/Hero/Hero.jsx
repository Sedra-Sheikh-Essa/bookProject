import React from 'react'
import './HeroStyle.css'
import book from './../../../images/book.png'
const Hero = () => {
  return (
    <>
        <div className="container flex-between-c Hero">
            <div className="Eric-Emanuel">
                <button className='author'>Author of august</button>
                <h1>Eric-Emanuel Schmitt </h1>
                <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
                <button className='view'>View his boooks</button>
            </div>
            <img src={book} alt="" />
        </div>
    </>
  )
}

export default Hero