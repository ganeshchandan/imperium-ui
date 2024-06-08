import { FC } from "react";
import "./radio-button.scss";

interface IRadioButton {
  isSelected: boolean;
  size: string;
}

const RadioButton: FC<IRadioButton> = ({ size, isSelected }) => {
  return (
    <div
      className={`radio-button ${isSelected ? "selected" : ""}`}
      style={{ width: size }}
    >
      <div className="selection-icon"></div>
    </div>
  );
};

export default RadioButton;
