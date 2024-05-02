import React from 'react'
import style from './Card.module.css'
import { FaStar } from "react-icons/fa";
import instendTea from '../../assets/instantTea.webp'
import { FaSearch } from "react-icons/fa";
import { MdAdd } from "react-icons/md";


const Card = ({img,name,price,desPrice,desPer,review,sale}) => {
   console.log("Sharique",img)
  return (
    <>
        {/* <h1>Bestsellers</h1> */}
       
        <div className={style.singleCardDiv}>
                <div className={style.hiddenAndShowIcon}>
                <p><FaSearch className={style.iconShow} /></p>
               <p> <MdAdd /></p>
                </div>
                <img src={img} alt="" />
                <p className={style.sale}>{sale}</p>
                <p className={style.itemName}>{name}</p>
                <div className={style.priceContainer}>
                <p className={style.itemPrice}>₹ &nbsp;{price}</p>
                <del>₹{desPrice}</del>
                <p>Save{desPer}% </p>
                </div>
                <p className={style
                .itemReview}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span className={style.reviewcount}>{review} review</span></p>
            </div>

            
        
     
    </>
  )
}

export default Card
