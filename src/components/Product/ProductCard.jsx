import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormator from "../CurrencyFormator/CurrencyFormator";
import classes from "./product.module.css";
function ProductCard({ data }) {
  return (
    <div className={`${classes.card__container}`}>
      <a href="">
        <img src={data.image} alt="" />
      </a>

      <div>
        <h4>{data.title}</h4>

        <div className={classes.rating}>
          {/*rateing /*instal rating from material icon*/}
          <Rating value={data.rating.rate} precision={0.1} />

          {/*count /*installing numerals fro pricing from numeral.js*/}
          <small>{data.rating.count}</small>
        </div>
        <div>
          <CurrencyFormator amount={data.price} />
        </div>

        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

//destructruing method//
/*function ProductCard({ data }) {
  const { image, title, id, rating, price } = data;

  return (
    <div className={`${classes.card__container}`}>
      <a href="">
        <img src={image} alt="" />
      </a>

      <div>
        <h2>{title}</h2>
      </div>
      <div className={classes.rating}>
        {/*rateing /*instal rating from material icon*/
//<Rating value={rating.rate} precision={0.1} />

/* {/*count /*installing numerals fro pricing from numeral.js*/
/*  <small>{rating.count}</small>
     // </div>
      <div>
        <CurrencyFormator amount={price} />
      </div>
      <button className={classes.button}>add to cart</button>
    </div>
  );
}

export default ProductCard;*/
