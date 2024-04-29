import React from 'react'
import style from "./Footer.module.css"
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import '../../App.css'
const Footer = () => {
  return (
  <>
    <footer >
    <div className={style.footerListPart}>

        <div id={style.footerFirstListDiv}>
        <div className={style.LsitHeading}>
            <h3>Site menu</h3>
    </div>

    <ul className={style.listingItem }> 
        <li>Our Story</li>
        <li>Search</li>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Track Your Order</li>
        <li>Safetea</li>
        <li>Download App</li>
        <li>My account</li>
    </ul>
        </div>

   <div id={style.footerSecondListDiv}>
        <div className={style.LsitHeading}>
            <h3>Get in touch</h3>
            <p id={style.mobileNo}> <span id={style.mobileIcon}><IoCall /></span>18001202424</p>
            <h3 id={style.follow}>Follow us</h3>
        </div>
        <div id={style.iconDiv}>
        <FaInstagram  className={style.icon}/>
        <MdFacebook className={style.icon}/>
        <FaTwitter className={style.icon}/>
        
        </div>
   </div>
    </div>
    <hr />
    <div className={style.bottomFooter}>
        <p>&copy; 2024 Chaayos</p>
        <p>Powered by Shopify</p>

    </div>
</footer>
  </>
  )
}

export default Footer
