import { FC, SyntheticEvent } from "react";
import "./checkbox.scss";
import CheckboxSelected from "../../../assets/checkbox_selected.svg";
import CheckBox from "../../../assets/checkbox.svg";

interface ICheckBox {
  isSelected: boolean;
  size: string;
  onClick?: (event: SyntheticEvent<HTMLDivElement>) => void;
}

const Checkbox: FC<ICheckBox> = ({ isSelected, size, onClick }) => {
  return (
    <div className={`checkBox`} style={{ width: size }} onClick={onClick}>
      <img src={isSelected ? CheckboxSelected : CheckBox} alt="checkbox" />
    </div>
  );
};

export default Checkbox;
