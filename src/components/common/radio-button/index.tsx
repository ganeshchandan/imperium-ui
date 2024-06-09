import { FC, SyntheticEvent } from "react";
import "./radio-button.scss";

interface IRadioButton {
  isSelected: boolean;
  size: string;
  onClick?: (event: SyntheticEvent<HTMLDivElement>) => void;
}

const RadioButton: FC<IRadioButton> = ({ size, isSelected, onClick }) => {
  return (
    <div
      className={`radio-button ${isSelected ? "selected" : ""}`}
      style={{ width: size }}
      onClick={onClick}
    >
      <div className="selection-icon"></div>
    </div>
  );
};

export default RadioButton;
