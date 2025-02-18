import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import classes from "./product.module.css";
function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") //the resposn coming is called data not products
      .then((res) => {
        console.log(res);
        const singleData = res.data;
        setProduct(singleData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //**the fetch method */

  /*useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/

  return (
    <section className={classes.Product_container}>
      {product?.map((singleProduct, i) => {
        return <ProductCard key={i} data={singleProduct} />;
      })}
    </section>
  );
}

export default Product;
