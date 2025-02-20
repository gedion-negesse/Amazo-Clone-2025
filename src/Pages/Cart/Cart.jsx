import React, { useContext } from "react";
import classes from "./cart.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { Datacontext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormator from "../../components/CurrencyFormator/CurrencyFormator";
import { Link } from "react-router-dom";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(Datacontext);
  // previous amount in the basket + current items
  const total = basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__conyainer}>
          <h2>hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Opp ! No items in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  data={item}
                  flex={true}
                  renderDesc={true}
                  renderAdd={false}
                />
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>subtotal({basket?.length}items)</p>
              <CurrencyFormator amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>this ordr contains a gift</small>
            </span>
            <Link to="/payment">Continue to CheckOut</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
