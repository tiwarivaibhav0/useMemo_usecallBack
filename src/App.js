import logo from "./logo.svg";
import "./App.css";
import Component2 from "./component2";
import Component1 from "./component1";
import Component3 from "./component3";
import { useCallback, useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const change1 = useCallback((num) => {
    setNum1(num);
  }, []);
  const change2 = useCallback((num) => {
    setNum2(num);
  }, []);

  return (
    <div className="App">
      <Component1 num1={num1} change1={change1} />
      <Component2 num1={num1} num2={num2} change2={change2} />
      <Component3 num2={num2} />
    </div>
  );
}

export default App;
