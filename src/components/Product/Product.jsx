import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import classes from "./product.module.css";
import Loader from "../Loader/Loader";
function Product() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // we use the is loading to hold& let customer know that the dat is coming in short period of seconds all Api calling product should use the is loading functionality
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products") //the resposn coming is called data not products
      .then((res) => {
        console.log(res);
        const singleData = res.data;
        setProduct(singleData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.Product_container}>
          {product?.map((singleProduct, i) => {
            return (
              <ProductCard key={i} data={singleProduct} renderAdd={true} />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;
