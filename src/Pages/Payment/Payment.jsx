import React, { useContext, useState } from "react";
import classes from "./payment.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { Datacontext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormator from "../../components/CurrencyFormator/CurrencyFormator";
import { axiosInstance } from "../../Api/axios";
import { Await } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utilities/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utilities/action.type";

function Payment() {
  const [{ basket, user }, dispatch] = useContext(Datacontext);

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
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  {
    /*defining error handling function */
  }
  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError(null);
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);
      // 1. backend || function  connection--- to cet the clinet secret
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/creat?total=${total * 100}`,
      });

      // console.log(response.data);
      const clienSecret = response.data?.clienSecret;
      // 2. clinet side(react side confirmation) using stripe

      const { paymentIntent } = await stripe.confirmCardPayment(clienSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      //console.log(paymentIntent);

      //3. after the confirmation -- the orders are removed from the cart and will store on the firebase store db and it will be displayed on the order page

      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

      //emptying the basket

      dispatch({ type: Type.EMPTY_BASKET });

      setProcessing(false);
      navigate("/orders", { state: { msg: "you have placed new orders" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
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
              <form onSubmit={handlePayment}>
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
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={35} />
                        <p>please wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
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
