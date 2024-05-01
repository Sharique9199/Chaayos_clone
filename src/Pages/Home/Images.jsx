import React from "react";
import style from "./Home.module.css";
import forthImage from "../../assets/forth_special.webp";
import fifthImage from "../../assets/fifth_stores.webp";
import sixthImage from "../../assets/sixth_menu.webp";
import seventhImage from "../../assets/seventh_delivery.webp";
import eightImage from "../../assets/eight_gifitng.webp";
const Images = () => {
  return (
    <>
      <div className={style.title}>
        <p>FEATURED IN </p>
        <p>Forbes</p>
        <p>The Hindu</p>
      </div>
      <div className={style.images}>
        <div className={style.imagesName}>
          <p>Our Specials</p>
          <span>Most recommended product of all time</span>
        </div>
        <img src={forthImage} alt="" />
      </div>

      <div className={style.images}>
        <div className={style.imagesName}>
          <p>Our Stores</p>
          <span>Every cafe is uniquely designed</span>
        </div>
        <img src={fifthImage} alt="" />
      </div>
      <div className={style.images}>
        <div className={style.imagesName}>
          <p>Our Menu</p>
          <span>Relax with our wide range of Chai</span>
        </div>
        <img src={sixthImage} alt="" />
      </div>
      <div className={style.images}>
        <div className={style.imagesName}>
          <p>Chai Delivery</p>
        </div>
        <img src={seventhImage} alt="" />
      </div>
      <div className={style.images}>
        <div className={style.imagesName}>
          <p>Premium Gifting</p>
          <p>Perfect Chai time for your loved ones</p>
        </div>
        <img src={eightImage} alt="" />
      </div>
    </>
  );
};

export default Images;
