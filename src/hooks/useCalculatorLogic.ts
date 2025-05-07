import { useState } from "react";

export const useCalculatorLogic = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [firstOperand, setFirstOperand] = useState<string | null>(null);
  const [selectedOperation, setSelectedOperation] = useState<string | null>(
    null
  );

  /**
   * Updates the display value with the given number.
   *
   * If the current display value is "0", it sets the display value to the given
   * number. Otherwise, it concatenates the given number to the current display
   * value.
   *
   * @param {string} number - The number to update the display value with.
   */
  const handleNumberClick = (number: string) => {
    setDisplayValue((prevValue) =>
      prevValue === "0" ? number : prevValue + number
    );
  };

  const handleOperatorClick = (operator: string) => {
    // TODO: handle operator click
    console.log(operator);
  };

  const handleEqualsClick = () => {
    // TODO: handle equals click
  };

  /**
   * Clears the calculator's state, setting the display value to "0" and
   * resetting the first operand and selected operation to null.
   */
  const handleClearClick = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setSelectedOperation(null);
  };

  return {
    displayValue,
    firstOperand,
    selectedOperation,
    handleNumberClick,
    handleOperatorClick,
    handleEqualsClick,
    handleClearClick,
  };
};
