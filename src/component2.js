import React, { memo, useState } from "react";
import Component3 from "./component3";

function Component2(props) {
  console.log("Hello from Component 2");

  return (
    <div>
      <p>Output in Comp2 : Entered Value is {props.num1}</p>
      <br /> <br />
      <br />
      Input in Comp2{" "}
      <input
        value={props.num2}
        onChange={(e) => props.change2(e.target.value)}
      />
    </div>
  );
}

export default memo(Component2);
