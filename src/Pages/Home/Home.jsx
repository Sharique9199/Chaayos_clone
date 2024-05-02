import React from "react";
import style from "./Home.module.css";
import Layout from "../../Layout";
import Slider from "../../components/Slider/Slider";
import ItemsList from "../../components/Card/ItemsList";
import Card from "../../components/Card/Card";
import Images from "./Images";
import Login from "../../components/Login/Login";

const Home = () => {
  return (
    <Layout>
      <marquee className={style.auto_run} behavior="" direction="">
        15% Off on First Order : Use Code - FIRSTORDER &nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15% Off on First Order : Use
        Code - FIRSTORDER &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15% Off on
        First Order : Use Code - FIRSTORDER &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;15% Off on First Order : Use Code -
        FIRSTORDER
      </marquee>
      <div className={style.advertisement}>
        <p>
          Best rated cafe with <b>4.4 Rating</b> ! For queries support{" "}
          <b>1800 120 2424</b>
        </p>
        <button>DOWNLOAD APP</button>
      </div>
      <Login/>

      <Slider />
      <Images />

      <marquee behavior="" direction="">
        Free shipping on order above Rs.250 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        Free shipping on order above Rs.250 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        15% Off on Free shipping on order above Rs.250
      </marquee>

      <ItemsList />
      <Card />
      <Card />
    </Layout>
  );
};

export default Home;
