import React from "react";
import styles from "./Description.module.css";

const DescriptionCards = () => {
  return (
    <div className={styles.DCards}>
      {/* <p>You may also like</p> */}
      <div className={styles.card}>
        <img
          src="https://cdn.shopify.com/s/files/1/0537/1104/4798/files/front_100gm_lemongrassginger.jpg?v=1683541198&width=720"
          alt=""
       className={styles.Dimage}
        />
        <p>Masala Chai</p>

        <b>₹</b>
      </div>
      <div className={styles.card}>
        <img
          src="https://cdn.shopify.com/s/files/1/0537/1104/4798/files/front_100gm_lemongrassginger.jpg?v=1683541198&width=720"
          alt=""
       className={styles.Dimage}
        />
        <p>Masala Chai</p>

        <b>₹</b>
      </div>
      <div className={styles.card}>
        <img
          src="https://cdn.shopify.com/s/files/1/0537/1104/4798/files/front_100gm_lemongrassginger.jpg?v=1683541198&width=720"
          alt=""
       className={styles.Dimage}
        />
        <p>Masala Chai</p>

        <b>₹</b>
      </div>
      <div className={styles.card}>
        <img
          src="https://cdn.shopify.com/s/files/1/0537/1104/4798/files/front_100gm_lemongrassginger.jpg?v=1683541198&width=720"
          alt=""
          className={styles.Dimage}
        />
        <p>Masala Chai</p>

        <b>₹</b>
      </div>
      <div className={styles.card}>
        <img
          src="https://cdn.shopify.com/s/files/1/0537/1104/4798/files/front_100gm_lemongrassginger.jpg?v=1683541198&width=720"
          alt=""
        className={styles.Dimage}
        />
        <p>Masala Chai</p>

        <b>₹</b>
      </div>
      <div className={styles.card}>
        <img
          src="https://cdn.shopify.com/s/files/1/0537/1104/4798/files/front_100gm_lemongrassginger.jpg?v=1683541198&width=720"
          alt=""
        className={styles.Dimage}
        />
        <p>Masala Chai</p>

        <b>₹</b>
      </div>
    </div>
  );
};

export default DescriptionCards;
