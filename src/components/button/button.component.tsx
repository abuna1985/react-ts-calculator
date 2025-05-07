import { FC } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

/**
 * A basic button component.
 *
 * @prop {string} label - The button's display text.
 * @prop {() => void} onClick - The function to call when the button is clicked.
 * @prop {boolean} [disabled=false] - True if the button should be disabled.
 *
 * @example
 * <Button label="Click Me" onClick={() => console.log("Button clicked")} />
 */
const Button: FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
