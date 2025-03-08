import { useState, useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Carusole from "./components/Carusole/Carusole";
import Catagory from "./components/Catagory/Catagory";
import Product from "./components/Product/Product";
import Routing from "./Router";
import { Datacontext } from "./components/DataProvider/DataProvider";
import { Type } from "./Utilities/action.type";
import { auth } from "./Utilities/firebase";
function App() {
  const [count, setCount] = useState(0);
  const [{ user }, dispatch] = useContext(Datacontext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Routing basename="/Amazo-Clone-2025" />
    </>
  );
}

export default App;

//what we do here is basically if the user is signed out we tell the fire abse it is signed out and it makes the state empty but if the user refresh the page befor signed out we loos the state so to get back the state or (who the loged in userwas before refresh) we need toa pply the use effect to know the user.what the use effect do is , on initial render always fecth the loged in user info from the fire base and it will set it  to our global state using the dipatch and method
