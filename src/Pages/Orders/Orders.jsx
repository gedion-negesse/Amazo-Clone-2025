import React, { useEffect, useContext, useState } from "react";
import classes from "./order.module.css";
import LayOut from "../../components/LayOut/LayOut";
import ProductCard from "../../components/Product/ProductCard";
import { db } from "../../Utilities/firebase.js";
import { Datacontext } from "../../components/DataProvider/DataProvider";

function Orders() {
  const [{ user }, dispatch] = useContext(Datacontext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot?.docs?.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.Orders__container}>
          <h2>Your Orders</h2>

          {orders.length == 0 && (
            <p style={{ padding: "20px" }}>You don't have orders yet.</p>
          )}
          <div>
            {orders?.map((eachOrders, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrders?.id}</p>

                  {eachOrders?.data?.basket?.map((order) => (
                    <ProductCard flex={true} data={order} key={order.id} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
