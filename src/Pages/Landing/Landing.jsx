import React from "react";
import LayOut from "../../components/LayOut/LayOut";
import Carusole from "../../components/Carusole/Carusole";
import Catagory from "../../components/Catagory/Catagory";
import Product from "../../components/Product/Product";
function Landing() {
  return (
    <LayOut>
      <Carusole />
      <Catagory />
      <Product />
    </LayOut>
  );
}

export default Landing;
