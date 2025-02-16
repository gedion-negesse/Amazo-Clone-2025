import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Carusole from "./components/Carusole/Carusole";
import Catagory from "./components/Catagory/Catagory";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Carusole />
      <Catagory />
    </>
  );
}

export default App;
