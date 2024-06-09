import { FC, SyntheticEvent } from "react";
import "./button.scss";

interface IButton {
  text: string;
  className?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

const DEFAULT_VARIANT = "primary";

const Button: FC<IButton> = ({
  text,
  className = "",
  variant = DEFAULT_VARIANT,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`custom-button ${className} ${variant} ${
        disabled ? "disabled" : ""
      }`}
      onClick={onClick}
      data-buttonname={text}
    >
      {text}
    </button>
  );
};

export default Button;
