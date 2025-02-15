import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Carusole from "./components/Carusole/Carusole";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Carusole />
    </>
  );
}

export default App;
