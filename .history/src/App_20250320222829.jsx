import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Curve } from "recharts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GrowthGraph />
    </>
  );
}

export default App;
