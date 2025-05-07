import { FC } from "react";
import Button from "../button/button.component";

interface CalculatorKeypadProps {
  onButtonClick: (value: string) => void;
}

/**
 * A component that displays a keypad with buttons 0-9, C, /, \*, -, +, and =.
 *
 * @prop {string} onButtonClick - The function to call when a button is clicked.
 *
 * @example
 * <CalculatorKeypad onButtonClick={(value) => console.log(value)} />
 */
const CalculatorKeypad: FC<CalculatorKeypadProps> = ({ onButtonClick }) => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "C",
    "0",
    "=",
    "+",
  ];

  return (
    <div>
      {buttons.map((buttonLabel) => (
        <Button
          key={buttonLabel}
          label={buttonLabel}
          onClick={() => onButtonClick(buttonLabel)}
        />
      ))}
    </div>
  );
};

export default CalculatorKeypad;
