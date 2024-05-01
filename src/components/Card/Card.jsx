import React from 'react'
import style from './Card.module.css'
import { FaStar } from "react-icons/fa";
import instendTea from '../../assets/instantTea.webp'

const Card = () => {
  return (
    <>
      <section>
        <h1>Bestsellers</h1>
        <div className={style.cardContainer}>
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
