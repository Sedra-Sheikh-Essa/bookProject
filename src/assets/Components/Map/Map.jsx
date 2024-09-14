import React from 'react'
import './MapStyle.css'

const Map = () => {
  return (
    <>
      <div className="container Map flex-between-c">
        <div className="knowUs">
          <h1 className='question'>Did you know us? </h1>
          <p className="desc">We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular publishs just for your delight. <br />
          If you are about books, you must to subscribe to our newsletter. </p>
          <form action="" className='flex-col form'>
            <input type="text" placeholder='Your name ' />
            <input type="email" placeholder='Your e-mail' />
            <button type='submit'>Subscribe</button>
          </form>
        </div>

        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104928.15795744583!2d36.75948338486435!3d34.730269956499896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15230e9047c7c0fb%3A0xac367e06303788d0!2z2K3Zhdi12Iwg2LPZiNix2YrYpw!5e0!3m2!1sar!2snl!4v1711057308327!5m2!1sar!2snl" 
        width="600" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </>
  )
}

export default Map