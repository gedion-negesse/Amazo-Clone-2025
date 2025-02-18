import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Carusole from "./components/Carusole/Carusole";
import Catagory from "./components/Catagory/Catagory";
import Product from "./components/Product/Product";
import Routing from "./Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
