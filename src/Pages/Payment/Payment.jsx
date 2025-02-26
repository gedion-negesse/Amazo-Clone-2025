import React, { useContext, useState } from "react";
import classes from "./payment.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { Datacontext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormator from "../../components/CurrencyFormator/CurrencyFormator";

function Payment() {
  const [{ basket, user }, disptch] = useContext(Datacontext);
  {
    /*function for telling us total item on the cart */
  }
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  {
    /*function for clacultating total price */
  }

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);

  const stripe = useStripe();
  const elements = useElements();
  {
    /*defining error handling function */
  }
  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError(null);
  };
  return (
    <LayOut>
      {/*header */}
      <div className={classes.payment_header}>Checkout ({totalItem} )items</div>

      <section className={classes.payment}>
        {/*addresse */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>7710 Maple avenue</div>
            <div>Takoma Park, MD</div>
          </div>
        </div>
        <hr />
        {/*products*/}
        <div className={classes.flex}>
          <h3>Review itrem and deliver info. </h3>
          <div>
            {basket?.map((item, i) => (
              <ProductCard key={i} data={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/*paymentform */}
        <div className={classes.flex}>
          <h3>payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                {/*display error if there is */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/*importing smart card from stripe */}
                <CardElement onChange={handleChange} />

                {/*price total */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p> <CurrencyFormator amount={total} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
