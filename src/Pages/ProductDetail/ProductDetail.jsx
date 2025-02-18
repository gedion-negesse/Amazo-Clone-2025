import React, { useEffect, useState } from "react";
import classes from "./productDetail.module.css";
import LayOut from "../../components/LayOut/LayOut";
import axios from "axios";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endpoints";
import ProductCard from "../../components/Product/ProductCard";

function ProductDetail() {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <LayOut>
      <ProductCard data={product} />
      {/*we pass the pased id data tas aprop to the product card*/}
    </LayOut>
  );
}

export default ProductDetail;
