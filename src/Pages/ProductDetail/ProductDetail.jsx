import React, { useEffect, useState } from "react";
import classes from "./productDetail.module.css";
import LayOut from "../../components/LayOut/LayOut";
import axios from "axios";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endpoints";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false); //initilally state false

  useEffect(() => {
    setIsLoading(true); //any time up on page refresh show is loading
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        setIsLoading(false); //if success loading dont show loading
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); //if there is error fectching dont loead
      });
  }, []);

  return (
    <LayOut>
      {/*we pass the pased id data tas aprop to the product card*/}
      {isLoading ? <Loader /> : <ProductCard data={product} />}
    </LayOut>
  );
}

export default ProductDetail;
