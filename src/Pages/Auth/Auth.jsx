import React from "react";
import classes from "./signUp.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { Link } from "react-router-dom";
function Auth() {
  return (
    <section className={classes.login}>
      <div>
        {/*logo*/}
        <Link to={"/auth"}>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG12.png"
            alt="Amazon logo"
          />
        </Link>
      </div>
      {/*form dive */}
      <div className={classes.login__container}>
        <h1>Sign in</h1> <br />
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <br />
            <input type="email" id="email" />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password</label>
            <br />

            <input type="password" id="password" />
          </div>
          <br />
          {/*sin in btn */}
          <button className={classes.btn__sin}>Sign in</button>
          <br />
          <br />
          {/*agreement */}
          <p>
            By signing-in you agree to the AMAZON,
            <br />
            FAKE CLONE Conditions of Use & sale. <br />
            please see our Privacy Notice,our Cookies Notice and our
            interest-Based Ads Notice.
            <br />
          </p>
          <br />
          {/*creat account btn */}
          <button className={classes.btn__creat}>
            Creat your amazon Account
          </button>
        </form>
      </div>
    </section>
  );
}

export default Auth;
