import { useState, FC } from "react";
import Display from "../display/display.component";
import CalculatorKeypad from "../calculator-keypad/calculator-keyboard.component";

const Calculator: FC = () => {
  const [currentInput, setCurrentInput] = useState("0");

  /**
   * Updates the current input state with the value of the button clicked.
   *
   * @param {string} value - The value of the button that was clicked.
   */
  const handleButtonClick = (value: string) => {
    setCurrentInput(value);
  };

  return (
    <div>
      <Display value={currentInput} />
      <CalculatorKeypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
