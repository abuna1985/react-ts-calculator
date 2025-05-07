import { FC } from "react";

interface DisplayProps {
  value: string | number;
}

/**
 * A component that displays a value.
 *
 * @prop {string | number} value - The value to display.
 *
 * @example
 * <Display value="42" />
 */
const Display: FC<DisplayProps> = ({ value }) => <div>{value}</div>;

export default Display;
