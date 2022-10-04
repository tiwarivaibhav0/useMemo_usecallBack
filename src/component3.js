import React, { memo } from "react";

function Component3(props) {
  console.log("Hello from Component 3");
  return (
    <div>
      <p>Output in Comp3 : Entered Value is {props.num2}</p>
    </div>
  );
}

export default memo(Component3);
