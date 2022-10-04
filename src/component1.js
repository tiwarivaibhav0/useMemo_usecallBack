import { Button, Card, Page, TextField } from "@shopify/polaris";
import React, { memo, useCallback, useMemo, useState } from "react";
import Component2 from "./component2";

function Component1(props) {
  console.log("Hello from Component 1");
  return (
    <div>
      Input in Comp1{" "}
      <input
        value={props.num1}
        onChange={(e) => props.change1(e.target.value)}
      />
    </div>
  );
}

export default memo(Component1);
