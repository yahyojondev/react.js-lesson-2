import React from 'react'
import { TfiApple } from "react-icons/tfi";
import { IoBagOutline, IoSearch } from "react-icons/io5";
import { Items } from '../../static/Index';

let items = Items.map?.((el,index)=> ( 

            <li key={index} className="navbar__list__item"><a href="#" className="navbar__link">{el}</a></li>

))

function Navbar() {
  return (
   <div className="navbar">
     <div className="container">
        <ul className="navbar__list">
            <TfiApple />
            {items}
            <IoSearch />
            <IoBagOutline />
        </ul>
     </div>
   </div>
  )
}

export default Navbar