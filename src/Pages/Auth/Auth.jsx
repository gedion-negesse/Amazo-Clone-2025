import React, { useState, useContext } from "react";
import { ClipLoader } from "react-spinners";
import classes from "./signUp.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utilities/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"; //importing two methods from fire base to enable us to creat account with email and to sign in with email and password

import { Datacontext } from "../../components/DataProvider/DataProvider"; // after we set the user on reducer we have to provid for all componets about the user
import { Type } from "../../Utilities/action.type";

import { useLocation } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //console.log(password, email);
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(Datacontext); //creating context to use the dispatch and the satte after getting the user info
  //console.log(user);

  const navigate = useNavigate(); // import and use navigate to use it the customer navigat to home page after sign in or sign up
  const navStateData = useLocation(); //special hook we use it to redirect the path

  console.log(navStateData);
  const [loading, setLoading] = useState({
    // creating initial state of loader(spinner) for sign in and sign up

    signin: false,
    signup: false,
  });
  // creating afunction for sign in and sign up

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name == "signin") {
      //if user clicked on the signin button we use the sign in  method to get authentication it is the promis so we use (.then)
      setLoading({ ...loading, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signin: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signin: false });
        });
    } else {
      //if user clicked on the signup button we use the creatuser method to get authentication it is the promis so we use (.then)
      setLoading({ ...loading, signup: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);

          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signup: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signup: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      <div>
        {/*logo*/}
        <Link to={"/"}>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG12.png"
            alt="Amazon logo"
          />
        </Link>
      </div>
      {/*form dive */}
      <div className={classes.login__container}>
        <h1>Sign in</h1> <br />
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontweight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
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
            {loading.signin ? (
              <ClipLoader color="light blue" size={25} />
            ) : (
              "Sign in"
            )}
          </button>
          <br />
          <br />
        </form>
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
          {loading.signup ? (
            <ClipLoader color="orange" size={25} />
          ) : (
            "Creat your amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
