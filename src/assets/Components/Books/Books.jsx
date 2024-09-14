import React from 'react'
import axios from 'axios'
import CardBook from '../CardBook/CardBook'
import './BookStyle.css'
import './../Hero/HeroStyle.css'

const Books = () => {
return (
    <>
        <div className="container">
            <p className="title">Selected for you</p>
            <CardBook />
        </div>
    </>
)
}

export default Books