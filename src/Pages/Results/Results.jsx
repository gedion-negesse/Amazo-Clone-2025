import React, { useEffect, useState } from "react";
import classes from "./results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import axios from "axios";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endpoints";
import ProductCard from "../../components/Product/ProductCard";
function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <div className={classes.product_container}>
          {results?.map((products, i) => (
            <ProductCard key={i} data={products} />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
