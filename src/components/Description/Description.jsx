import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Layout from "../../Layout";
import styles from "./Description.module.css";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };
  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <img
            src="https://chaayos.com/cdn/shop/products/3_0cbb1a54-dcef-44fb-97a9-00a2df0483e1.jpg?v=1637847179&width=900"
            alt=""
            className={styles.image}
          />
          <div className={styles.smallImage}>
            <div>
              <img src="https://chaayos.com/cdn/shop/products/3_0cbb1a54-dcef-44fb-97a9-00a2df0483e1.jpg?v=1637847179&width=120" alt="" />
            </div>
            <div>
              <img src="https://chaayos.com/cdn/shop/products/3_0cbb1a54-dcef-44fb-97a9-00a2df0483e1.jpg?v=1637847179&width=120" alt="" />
            </div>
            <div>
              <img src="https://chaayos.com/cdn/shop/products/3_0cbb1a54-dcef-44fb-97a9-00a2df0483e1.jpg?v=1637847179&width=120" alt="" />
            </div>
            <div>
              <img src="https://chaayos.com/cdn/shop/products/3_0cbb1a54-dcef-44fb-97a9-00a2df0483e1.jpg?v=1637847179&width=120" alt="" />
            </div>
            <div>
              <img src="https://chaayos.com/cdn/shop/products/3_0cbb1a54-dcef-44fb-97a9-00a2df0483e1.jpg?v=1637847179&width=120" alt="" />
            </div>
            <div>
              <img src="https://chaayos.com/cdn/shop/products/3_0cbb1a54-dcef-44fb-97a9-00a2df0483e1.jpg?v=1637847179&width=120" alt="" />
            </div>
            <div>
              <img src="https://chaayos.com/cdn/shop/products/3_0cbb1a54-dcef-44fb-97a9-00a2df0483e1.jpg?v=1637847179&width=120" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <p className={styles.heading}>Make Your Own Chai - 400g Pack</p>
          <div className={styles.box}>
            <p>Plain Assam Tea Gold</p>
            <p>Tea + 1 Spice</p>
            <p>Tea + 1 Spice</p>
          </div>

          <p>This is plain Assam Tea Gold</p>
          <p className={styles.price}>
            <del className={styles.delPrice}>₹399</del> ₹327
          </p>
          <p className={styles.discount}>Save 18%</p>
          <p>Quantity</p>
        
          <div className={styles.quantitySelector}>
            <div className={styles.inputContainer}>
         
                <p onClick={decreaseQuantity}
                className={styles.decrementButton}>-</p>
              
              
            
              <p  value={quantity} className={styles.input}>{quantity}</p>
              <p onClick={increaseQuantity}
                className={styles.incrementButton}>+</p>
              
            </div>
          </div>
          <br />
          <span className={styles.securePayment}>Secure Payment</span>
          <p>In stock, ready to ship</p>

          <span className={styles.taxIncluded}>Tax included</span>
          <br />

          <button className={styles.addToCart}>Add to Cart</button>
          {/* <div className={styles.reviews}>
            <h2>Customer Reviews</h2>
            <div className={styles.review}>
              <p>
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
              </p>
              <span>Based on 23 reviews</span>
            </div>
            <button>Write a review</button>
            <div className={styles.review}>
              <p>
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
              </p>
              <span>Quick service</span>
              <p>
                Today I had chaayos tea and that tea taste is awesome and the
                lady is very nice the name is madhu ,,👏super
              </p>
            </div>
            <div className={styles.review}>
              <p>
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaRegStar className={styles.emptyStar} />
              </p>
              <span>Price on the higher side.</span>
              <p>
                The ingredients used are very cheap in the primary market. The
                company is charging Rs.449/ per half kg. This should be reviewed
                to push the sale.
              </p>
            </div>
            <div className={styles.review}>
              <p>
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
              </p>
              <span>Meri Wali chai is a fully loaded package</span>
              <p>
                Best for my needs, I can choose the ingredients of my choice and
                get it delivered anywhere. Simply Awesome.
              </p>
            </div>
            <div className={styles.review}>
              <p>
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
              </p>
              <span>Worth Buy</span>
              <p>
                Loved this product too much! Packaging is also too good. Value
                for money.
              </p>
            </div>
            <div className={styles.review}>
              <p>
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
              </p>
              <span>Impressive Product</span>
              <p>
                I am really impressed by this product. It has really amazing
                flavour & taste. If you are a tea lover then do try this. Also
                the packaging was great & it?s really wonderful to have such a
                product in this amount. Great product
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <div className={styles.Accordions}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className={styles.description}
          >
            Description
          </AccordionSummary>
          <AccordionDetails>
            Chaayos Meri Wali Chai brings to you a unique chai experience
            crafted just for you. The tea is customized with flavours made
            specially for you.
            <br /> <br />
            <br />
            With over 7 flavours to choose from, make the tea of your choice as
            per your taste. Our flavours range from Ginger, Cardamom, Tulsi,
            Cinnamon, Black Pepper, Clove and Saunf.
          </AccordionDetails>
        </Accordion>
      </div>
      
      <div className={styles.linksContainer}>
      <div className={styles.links}>
        <br />
        <FacebookRoundedIcon  className={styles.icons}/>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=your_url"
          target="_blank"
        
        >
           Facebook
        </a>
        <br />
        <TwitterIcon className={styles.icons} />
        <a
          href="https://twitter.com/intent/tweet?url=your_url&text=your_text"
          target="_blank"
        
        >
          Tweet
        </a>
        <br />
        <PinterestIcon className={styles.icons} xl/>
        <a
          href="https://www.pinterest.com/pin/create/button/?url=your_url&media=image_url&description=description"
          target="_blank"
        
        >
          Pin it
        </a>
      </div>
      </div>
     
    </Layout>
  );
};

export default ProductDetails;
