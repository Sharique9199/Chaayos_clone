

import React from "react";
import Layout from "../../Layout";
import Slider from "../../components/Slider/Slider";
import forthImage from "../../assets/forth_special.webp"
import fifthImage from "../../assets/fifth_stores.webp"
import sixthImage from "../../assets/sixth_menu.webp"
import seventhImage from "../../assets/seventh_delivery.webp"
import eightImage from "../../assets/eight_gifitng.webp"
import ItemsList from '../../components/Card/ItemsList'
import Card from "../../components/Card/Card";
import myData from '../../Data/Home.json'
import style from './Home.module.css'


const Home = () => {
  console.log(myData)
  
  return (
    <Layout>

      <marquee className="auto_run" behavior="" direction="">
        15% Off on First Order : Use Code - FIRSTORDER &nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15% Off on First Order : Use
        Code - FIRSTORDER &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15% Off on
        First Order : Use Code - FIRSTORDER  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;15% Off on First Order : Use Code - FIRSTORDER
      </marquee>
      <Slider />
      <div className="images">
        <img src={forthImage} alt="" />
      </div>
      <div className="images">
        <img src={fifthImage} alt="" />
      </div>
      <div className="images">
        <img src={sixthImage} alt="" />
      </div>
      <div className="images">
        <img src={seventhImage} alt="" />
      </div>
      <div className="images">
        <img src={eightImage} alt="" />
      </div>
      <marquee behavior="" direction="">
        Free shipping on order above Rs.250 &nbsp; &nbsp; &nbsp;
       &nbsp; &nbsp;  Free shipping on order above Rs.250  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  15% Off on
        Free shipping on order above Rs.250
      </marquee>

     <ItemsList/>
     <div className={style.Heading}>BestSeller</div>
    <div className={style.cardContainer}>
    {
      myData[0].data.map((data)=>{
        console.log("Anjum",myData[0].data)
        return(
          <Card
            
            img={data.img}
            name={data.name}
            price={data.price}
            desPrice={data.discountPrice}
            desPer={data.discountPer}
            review={data.review}
            sale={data.sale}
          />
        )
      })
     }
    </div>
    <div className={style.Heading}>New Arrivals</div>
    <div className={style.cardContainer}>
    {
      myData[1].data.map((data)=>{
        console.log("Anjum",myData[0].data)
        return(
          <Card
            
            img={data.img}
            name={data.name}
            price={data.price}
            desPrice={data.discountPrice}
            desPer={data.discountPer}
            review={data.review}
            sale={data.sale}
          />
        )
      })
     }
    </div>

    </Layout>
  );
};

export default Home;
