import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './BookDetailsStyle.css'

const BookDetails = () => {
    const [detail , setdetail] = useState([])
    let param = useParams()

    useEffect(() => {  
        axios.get(`https://example-data.draftbit.com/books/${param.id}`)
        .then((res) => {
            setdetail(res.data)
            console.log(param.id);
            console.log(res.data);
            console.log(typeof(res));
            console.log(typeof(res.data));
            console.log(detail);
            console.log(typeof(detail));
            console.log(detail.title);
        })
    } , [])

return (
<>
    <div className="container detailStyle">
        <img src={detail.image_url} alt="" className='img' />
        <div className="conDetail">
            <h1>{detail.title}</h1>
            <p className='authors'>{detail.authors}</p>
            <p className='About'>About Book:</p>
            <p className='desc'>{detail.description}</p>
            <div className='flex-align-c conNum'>
                <div className="circle"><span>-</span></div>
                <span className='num'>1</span>
                <div className="circle"><span>+</span></div>
            </div>
            <div className="conButton">
                <button className='button1'>Add to cart</button>
                <button className='button2'>Add to cart</button>
            </div>
            <div className='conPageRateReview'>
                <p> <span  className='purble'>Pages Number : </span>{detail.num_pages} Pages</p>
                <p> <span  className='purble'>Rating Count : </span>{detail.rating}</p>
                <p> <span  className='purble'>Reviews : </span>{detail.review_count}</p>
            </div>
        </div>
    </div>
        
</>)
}

export default BookDetails