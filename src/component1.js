import { Button, Card, Page, TextField } from "@shopify/polaris";
import React, { useCallback, useMemo, useState } from "react";

function Component1() {
  const [num1, setNum1] = useState("");

  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(0);

  const [stateColor, setStateColor] = useState("Yellow");

  console.log("Component 1 Renders");

  const multiplicationMemoized = useMemo(() => {
    console.log("From Multiplication Function");
    return num1 * num2;
  }, [num1, num2]);
  const toggleColor = () => {
    if (stateColor === "Yellow") setStateColor("White");
    else setStateColor("Yellow");
  };

  return (
    <div>
      <Page>
        <Card sectioned>
          {" "}
          <TextField
            type="number"
            placeholder="Enter num 1"
            value={num1}
            onChange={(e) => setNum1(e)}
          />
          <TextField
            type="number"
            placeholder="Enter num 2"
            value={num2}
            onChange={(e) => setNum2(e)}
          />
          <Card sectioned>
            <Button
              onClick={() => setSum(Number(num1) + Number(num2))}
              primary
              sectioned
            >
              Add the Values
            </Button>
            <br />
            <button
              style={{ backgroundColor: stateColor }}
              onClick={toggleColor}
            >
              Toggle Color
            </button>
            <br />

            {"Addition : " + sum}
            <br />

            {"Multiplication " + multiplicationMemoized}
          </Card>
        </Card>
      </Page>
    </div>
  );
}

export default Component1;
