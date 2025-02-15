import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/*left side dive */} {/*logo */}
          <div className={classes.logo__container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amzon logo"
              />
            </a>
          </div>
          {/*delivery section*/}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>USA</span>
            </div>
          </div>
          {/*the middle dive */}
          {/*search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>
          {/*right side dive */}
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14655.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            {/*the three components */}
            <a href="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>
            {/*orders */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>

            {/*cart */}
            <a href="" className={classes.cart}>
              <BiCart size={35} />

              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
