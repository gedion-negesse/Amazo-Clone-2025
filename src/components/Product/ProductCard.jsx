import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormator from "../CurrencyFormator/CurrencyFormator";
import classes from "./product.module.css";
import { Link } from "react-router-dom";

/*function ProductCard({ data }) {
  const { image, title, id, rating, price } = data;
  const { rate, count } = rating || {}; // Use `|| {}` to avoid errors if `rating` is undefined
  return (
    <div className={`${classes.card__container}`}>
      <Link to={`products/${id}`}>
        <img src={data.image} alt="" className={classes.img_container} />
      </Link>

      <div>
        <h4>{data.title}</h4>

        <div className={classes.rating}>
          {/*rateing /*instal rating from material icon*/
/* <Rating value={data.rating.rate} precision={0.1} />}

          {/*count /*installing numerals fro pricing from numeral.js*/
/* <small>{data.rating.count}</small>
        </div>
        <div>
          <CurrencyFormator amount={data.price} />
        </div>

        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;*/

//destructruing method////

function ProductCard({ data, flex, renderDesc }) {
  const { image, title, id, rating, price, description } = data;

  // we have to Destructure `rate` and `count` from `rating`
  const { rate, count } = rating || {}; // Use `|| {}` to avoid errors if `rating` is undefined

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>

      <div>
        <h2>{title}</h2>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}

        <div className={classes.rating}>
          {/*rateing /*instal rating from material icon*/}

          <Rating value={rate} precision={0.1} />
          {/*count /*installing numerals fro pricing from numeral.js*/}
          <small>{count}</small>
        </div>
        <div>
          <CurrencyFormator amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
