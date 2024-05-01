import React from 'react'
import style from './Card.module.css'
import { FaStar } from "react-icons/fa";
import instendTea from '../../assets/instantTea.webp'
import { FaSearch } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const Card = () => {
  return (
    <>
      <section>
        <h1>Bestsellers</h1>
        <div className={style.cardContainer}>
        <div>
                <div className={style.hiddenAndShowIcon}>
                <p><FaSearch className={style.iconShow} /></p>
               <p> <MdAdd /></p>
                </div>
                <img src={instendTea} alt="" />
                <p className={style.sale}>SALE</p>
                <p className={style.itemName}>Instant Tea - Masala - Regular Sugar (36 Sachets)</p>
                <div className={style.priceContainer}>
                <p className={style.itemPrice}>₹ &nbsp;549</p>
                <del>₹ 399</del>
                <p>Save 18%</p>
                </div>
                <p className={style
                .itemReview}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span className={style.reviewcount}>6 review</span></p>
            </div>

                  <div>
                <img src={instendTea} alt="" />
                <p className={style.sale}>SALE</p>
                <p className={style.itemName}>Instant Tea - Masala - Regular Sugar (36 Sachets)</p>
                <p className={style.itemPrice}>₹ &nbsp;549</p>
                <p className={style
                .itemReview}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
            </div>
            <div>
                <img src={instendTea} alt="" />
                <p className={style.sale}>SALE</p>
                <p className={style.itemName}>Instant Tea - Masala - Regular Sugar (36 Sachets)</p>
                <p className={style.itemPrice}>₹ &nbsp;549</p>
                <p className={style
                .itemReview}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
            </div>

            <div>
                
                <img src={instendTea} alt="" />
                <p className={style.sale}>SALE</p>
                <p className={style.itemName}>Instant Tea - Masala - Regular Sugar (36 Sachets)</p>
                <p className={style.itemPrice}>₹ &nbsp;549</p>
                <p className={style
                .itemReview}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
            </div>

            <div>
                <img src={instendTea} alt="" />
                <p className={style.sale}>SALE</p>
                <p className={style.itemName}>Instant Tea - Masala - Regular Sugar (36 Sachets)</p>
                <p className={style.itemPrice}>₹ &nbsp;549</p>
                <p className={style
                .itemReview}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
            </div>

            <div>
                <img src={instendTea} alt="" />
                <p className={style.sale}>SALE</p>
                <p className={style.itemName}>Instant Tea - Masala - Regular Sugar (36 Sachets)</p>
                <p className={style.itemPrice}>₹ &nbsp;549</p>
                <p className={style
                .itemReview}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Card
