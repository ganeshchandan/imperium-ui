import { FC } from "react";
import "./checkbox.scss";
import CheckboxSelected from "../../../assets/checkbox_selected.svg";
import CheckBox from "../../../assets/checkbox.svg";

interface ICheckBox {
  isSelected: boolean;
  size: string;
}

const Checkbox: FC<ICheckBox> = ({ isSelected, size }) => {
  return (
    <div className={`checkBox`} style={{ width: size }}>
      <img src={isSelected ? CheckboxSelected : CheckBox} alt="checkbox" />
    </div>
  );
};

export default Checkbox;
