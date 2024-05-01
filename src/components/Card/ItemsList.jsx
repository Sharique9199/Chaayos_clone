import React from 'react'
import style from './ItemsList.module.css';
import premix from '../../assets/premix.webp'
import spiced from '../../assets/spiced.jpg'
import natural from '../../assets/natural.webp'
import chai from '../../assets/chai_time.webp'
import flavorful from '../../assets/flavorful.webp'
import green from '../../assets/green.webp'
import pyramid from '../../assets/pyramid.webp'
import gifting from '../../assets/gifting.webp'
import choose_flavours from '../../assets/choose_flavours.webp'



const ItemsList = () => {
  return (
    <>
      <section>
            <h1>Shop now</h1>
            <div className={style.cardItemContainer}>
                <div>
                    <img src={premix} alt="1st" />
                    <h3>Premix</h3>
                </div>
                <div>
                    <img src={spiced} alt="2nd" />
                    <h3>Spiced</h3>
                </div>
                <div>
                    <img src={natural} alt="3rd" />
                    <h3>Natural</h3>
                </div>
                <div>
                    <img src={chai} alt="4th" />
                    <h3>Chai Time</h3>
                </div>
                <div>
                    <img src={flavorful} alt="5th" />
                    <h3>Flavorful</h3>
                </div>
                <div>
                    <img src={green} alt="6th" />
                    <h3>Green Tea</h3>
                </div>
                <div>
                    <img src={pyramid} alt="7th" />
                    <h3>Pyramid</h3>
                </div>
                <div>
                    <img src={gifting} alt="8th" />
                    <h3>Gifting</h3>
                </div>
                <div>
                    <img src={choose_flavours} alt="9th" />
                    <h3>Choose flavours</h3>
                </div>
            </div>

            <div className={style.offerCode}>
                <h1>Get 15% Off on First Order</h1>
                <p>Use Code:FIRSTORDER</p>
                <button>Shop Now</button>
            </div>
      </section>
    </>
  )
}

export default ItemsList
