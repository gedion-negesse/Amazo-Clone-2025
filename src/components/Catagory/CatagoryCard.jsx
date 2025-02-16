import React from "react";
import classes from "./catagory.module.css";
function CatagoryCard({ data }) {
  return (
    <div className={classes.catagory}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.img} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CatagoryCard;
