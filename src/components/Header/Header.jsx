import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import DataProvider from "../DataProvider/DataProvider";
import { Datacontext } from "../../components/DataProvider/DataProvider";
import { auth } from "../../Utilities/firebase"; // we use the method we got from firebase (auth.signout()) to sign out when sign out click
function Header() {
  const [{ basket, user }, dispatch] = useContext(Datacontext);
  console.log(basket.length);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/*left side dive */} {/*logo */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amzon logo"
              />
            </Link>
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
            <BsSearch size={38} />
          </div>
          {/*right side dive */}
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14655.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/*the three components */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                    {/*onclick we are telling to the fire base db the user is signout and after tellin we have to updat our state on the app.jsx*/}
                  </>
                ) : (
                  <>
                    <p> Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            {/*orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>

            {/*cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />

              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
