import React from 'react'
import { HeroItems } from '../../static/Index'

function Hero() {
    let heroItems = HeroItems?.map(el => (
         <div className="hero__wrapper" >
                <img src={el.img} alt="" />
                <h1>{el.title}</h1>
                <div className="hero__links">
                    <a className='hero__link' href="">{el.link}</a>
                    <a className='hero__link' href="">{el.link1}</a>
                </div>
            </div>
    ))
  return (
    <div className="hero">
           {heroItems}
    </div>
  )
}

export default Hero