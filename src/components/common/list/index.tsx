import { FC, SyntheticEvent } from "react";
import RadioButton from "../radio-button";
import "./list.scss";
import { EMPTY_STRING } from "../../../constants";
import Checkbox from "../checkbox";

interface IList {
  listItems: string[];
  isMultipleSelection: boolean;
  selectedItem: string[];
  onSelect: (selectedItem: string[]) => void;
}

const List: FC<IList> = ({
  listItems,
  selectedItem,
  onSelect,
  isMultipleSelection,
}) => {
  const handleSelected = (event: SyntheticEvent<HTMLDivElement>) => {
    const { itemvalue = EMPTY_STRING } = (event.target as HTMLDivElement)
      .dataset;
    if (isMultipleSelection) {
      onSelect([...selectedItem, itemvalue]);
    } else {
      onSelect([itemvalue]);
    }
  };

  return (
    <div className="lists">
      {listItems.map((item) => (
        <div
          className="list-item"
          key={item}
          onClick={handleSelected}
          data-itemvalue={item}
        >
          {isMultipleSelection ? (
            <Checkbox
              isSelected={selectedItem.includes(item)}
              size="1.375rem"
            />
          ) : (
            <RadioButton
              isSelected={selectedItem.includes(item)}
              size="1.25rem"
            />
          )}

          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
