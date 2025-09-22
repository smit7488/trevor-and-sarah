// src/App.tsx

import { useState } from "react";
import tsLogo from "./assets/trevor-and-sarah-logo-vertical.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");

  return (
    <>
      <div>
          <img src={tsLogo} className="logo trevorandsarah" alt="Trevor & Sarah logo" />
      </div>
      <h1>Coming Soon!</h1>
    </>
  );
}

export default App;
