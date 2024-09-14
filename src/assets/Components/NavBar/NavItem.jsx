import React, { useContext, useState } from 'react'
import './NavBarStyle.css'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../../App';
import moon_img from './../../../images/moon-01.svg'
import sun_img from './../../../images/sun.svg'

const NavItem = ({ulClass}) => {
const { Mode , changeMode } = useContext(ThemeContext);
return (
    <>
        <ul className={ulClass}>
            <li>
                <a href={"/"}>Home</a>
            </li>
            <li>
            <a href={"/"}>News</a>
            </li>
            <li>
            <a href={"/"}>Promotion of the mount</a>
            </li>
            <li>
            <a href={"/"}>Plublishs</a>
            </li>
            <li>
            <a href={"/"}>Subscribe to the newsletter</a>
            </li>
        </ul>               
        <div className='conMode'>
            <img 
            src={Mode === 'light'? moon_img :  sun_img } 
            alt="" className='mode-img' 
            onClick={changeMode} 
            />
            <p>{Mode === 'light' ? "Dark mode" : "Light mode"}</p>

            <div 
            className={Mode === 'light' ? "toggle" : "toggle-dark"} 
            onClick={changeMode}>
                <div className="toggle-circle"></div>
            </div>
        </div>
    </>
)
}

export default NavItem