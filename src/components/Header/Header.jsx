import React from 'react'
import style from './Header.module.css'
import logo from "../../assets/Chaayos_logo.jpg";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiHandbagLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
       <nav className={style.header}>
        <img src={logo} className={style.logo_img} alt="logo" />
        <ul className={style.navbarLeft}>
          <li>Shop</li>
          <li>About Us</li>
          <li>Cafe Locator</li>
          <li>Careers</li>
        </ul>
        <ul className={style.navbarRyt}>
          <li>
            <IoSearch />
          </li>
          <li>
            <FaRegUser  onClick={()=> window.location="/login"}/>
          </li>
          <li>
            <RiHandbagLine />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
