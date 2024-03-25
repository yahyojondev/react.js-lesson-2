import React from 'react'

function Banner({title,text,link,link1,color,img}) {
  return (
    <div className='banner' style={{background:`url(${img})no-repeat`}}>
       <div className="banner__wrapper">
            <h1 style={{color}} className='banner__title'>{title}</h1>
        <p style={{color}} className='banner__text'>{text}</p>
        <div className="hero__links">
            <a className='hero__link' href="">{link}</a>
            <a className='hero__link' href="">{link1}</a>
        </div>
       </div>
    </div>
  )
}

export default Banner