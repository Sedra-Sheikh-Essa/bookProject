import React, { useEffect, useState } from 'react'
import './NavBarStyle.css'
import world_img from './../../../images/world.png'
import NavItem from './NavItem'
import menu_icon from './../../../images/Menu.svg'
import close_icon from './../../../images/close.svg'

const NavBar = () => {
const [menu , setmenu] = useState(false)
function changeMenu(){
    setmenu(!menu);
} 

return (
<nav>
    <div className="container flex-between-c">
        <div>
            <p className="logo">B-W<img src={world_img} />rld</p>
        </div>
        <NavItem ulClass={"nav-items flex-align-c"} />
        <img
        src={menu_icon}
        alt=""
        className="menu-icon"
        onClick={changeMenu}
        />
    </div>

{menu ? (
    <div className="nav-mobile flex-col">
    <img
        src={close_icon}
        alt=""
        className="close-icon"
        onClick={changeMenu}
    />
        <NavItem ulClass={"nav-mobile-items flex-align-c flex-col"} />
    </div>
    ) : (
        <></>
    )}
</nav>
)
}

export default NavBar