import React, { useState, useContext } from "react";
import classes from "./signUp.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { Link } from "react-router-dom";
import { auth } from "../../Utilities/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"; //importing two methods from fire base to enable us to creat account with email and to sign in with email and password

import { Datacontext } from "../../components/DataProvider/DataProvider"; // after we set the user on reducer we have to provid for all componets about the user
import { Type } from "../../Utilities/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(Datacontext);
  //console.log(password, email);

  console.log(user);
  // creating afunction for sign in and sign up

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name == "signin") {
      //if user clicked on the signin button we use the sign in  method to get authentication it is the promis so we use (.then)
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //if user clicked on the signup button we use the creatuser method to get authentication it is the promis so we use (.then)
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);

          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
            {/*this is controled input using usestate, value=refers somthing written the mail ,target refers= the current iput */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password</label>
            <br />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <br />
          {/*sin in btn */}
          <button
            type="submit"
            name="signin" // we give name to identify whats is clicked wether sign in or sign up bc both share same handler function
            onClick={authHandler}
            className={classes.btn__sin}
          >
            Sign in
          </button>
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
          <button
            type="submit"
            name="signup" // we give name to identify whats is clicked wether "signin" or "signup" bc both share same handler function
            onClick={authHandler}
            className={classes.btn__creat}
          >
            Creat your amazon Account
          </button>
        </form>
      </div>
    </section>
  );
}

export default Auth;
