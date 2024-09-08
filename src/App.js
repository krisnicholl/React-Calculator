import React, { useState, useCallback } from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import axios from "axios";
import { API_BASE_URL, OPERATORS } from "./components/apiConstants";
import { getEndpoint } from "./utils/apiHelper";
import { btnValues } from "./configs/buttonConfig";

const App = () => {
  const [num, setNum] = useState("");
  const [operator, setOperator] = useState("");
  const [displayValue, setDisplayValue] = useState(0);
  const [previousResult, setPreviousResult] = useState(null);
  const [isChaining, setIsChaining] = useState(false);
  const [lastInput, setLastInput] = useState("");
  const [expression, setExpression] = useState("");

  const handleClear = useCallback(async () => {
    try {
      await axios.post(`${API_BASE_URL}/clear`);
      setNum("");
      setOperator("");
      setDisplayValue(0);
      setIsChaining(false);
      setPreviousResult(null);
      setLastInput("");
      setExpression("");
    } catch (error) {
      setDisplayValue("ERROR");
      setExpression("ERROR");
    }
  }, []);

  const handleDigitInput = (digit) => {
    if (lastInput === "result") return;
    setNum((prev) => prev + digit.toString());
    setExpression((prev) => prev + digit.toString());
    setLastInput("digit");
  };

  const handleOperatorInput = (op) => {
    if (lastInput === "operator") return;
    setOperator(op);
    setExpression((prev) => prev + ` ${op} `);
    if (!isChaining) {
      setPreviousResult(parseFloat(num));
    }
    setNum("");
    setLastInput("operator");
  };

  const handleCalculation = useCallback(async () => {
    try {
      let url;
      if (isChaining) {
        url = `${API_BASE_URL}/${getEndpoint(operator)}?b=${num}`;
      } else {
        url = `${API_BASE_URL}/${getEndpoint(operator)}?a=${previousResult}&b=${num}`;
      }

      const response = await axios.get(url);
      setDisplayValue(response.data);
      setExpression(response.data.toString());
      setPreviousResult(response.data);
      setNum("");
      setOperator("");
      setIsChaining(true);
      setLastInput("result");
    } catch (error) {
      setDisplayValue("ERROR");
      setExpression("ERROR");
    }
  }, [num, operator, previousResult, isChaining]);

  const handleClickButton = (btn) => {
    if (btn === "C") {
      handleClear();
      return;
    }

    if (!isNaN(btn) || btn === ".") {
      handleDigitInput(btn);
      return;
    }

    if ([OPERATORS.ADD, OPERATORS.SUBTRACT, OPERATORS.MULTIPLY, OPERATORS.DIVIDE].includes(btn)) {
      handleOperatorInput(btn);
      return;
    }

    if (btn === "=" && operator) {
      handleCalculation();
      return;
    }
  };

  return (
    <Wrapper>
      <Screen value={expression || displayValue} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => (
          <Button
            key={i}
            className={btn === "=" ? "equals" : ""}
            value={btn}
            onClick={() => handleClickButton(btn)}
          />
        ))}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
