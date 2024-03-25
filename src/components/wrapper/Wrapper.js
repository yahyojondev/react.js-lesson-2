import React from 'react'

function Wrapper({img,title,text,link,link1,bg,color}) {
  return (
    <div className="wrapper">
        <div className="cards__wrapper" style={{background:`url(${bg})no-repeat`}}>
            <ul className="wrapper__list">
                <li className="banner__title" style={{color:color}}><img src={img} alt="" />{title}</li>
                <li className="banner__text" style={{color:color}}>{text}</li>
                <li className="wrapper__item">
                    <div className="hero__links">
                        <a href="" className="hero__link">{link}</a>
                        <a href="" className="hero__link">{link1}</a>
                    </div>
                </li>
            </ul>
        </div>
        <div className="cards__wrapper" style={{background:`url(${bg})no-repeat`}}>
            <ul className="wrapper__list">
                <li className="banner__title" style={{color:color}}><img src={img} alt="" />{title}</li>
                <li className="banner__text" style={{color:color}}>{text}</li>
                <li className="wrapper__item">
                    <div className="hero__links">
                        <a href="" className="hero__link">{link}</a>
                        <a href="" className="hero__link">{link1}</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>

  )
}

export default Wrapper