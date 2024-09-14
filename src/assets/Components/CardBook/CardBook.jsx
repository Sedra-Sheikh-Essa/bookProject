import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import bookIcon from './../../../images/Icon.svg'
import star from './../../../images/star.svg'
import './CardBookStyle.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../App'
import BookDetails from '../BookDetails/BookDetails'

const CardBook = () => {
    const {DataBook} = useContext(ThemeContext);

return (
<>
    <div className="conBooks">
    {DataBook.map((elements , index) => {return(
    <div className="CardBook" key={index}>
        <img src={elements.image_url} alt="" className='bigimg' />
        <p className='authors'>{elements.authors}</p>
        <div className='conPageRate flex-between-c'>
        <p className='conIcon'><img src={bookIcon} alt="" />{elements.num_pages} Page</p>
        <p className='conIcon'><img src={star} alt="" />{elements.rating}</p>
        </div>
        <Link to={`/details/${elements.id}`}>
        <button onClick={<BookDetails id={elements.id} />}>Show Details</button>
        </Link>
    </div>
)})}  

    </div>
</>
)
}

export default CardBook