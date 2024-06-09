import { FC, SyntheticEvent } from "react";
import { IFilterByCategory } from "./content/container";
import { EMPTY_STRING } from "../../constants";

const Relevance: FC<IFilterByCategory> = ({
  listItems,
  updatedSelectedItems,
  handleSelected,
}) => {
  const onSelect = (event: SyntheticEvent<HTMLDivElement>) => {
    const { itemvalue = EMPTY_STRING } = (event.target as HTMLDivElement)
      .dataset;
    const selectedItem = [...updatedSelectedItems];
    const indexOf = selectedItem.indexOf(itemvalue);
    if (indexOf < 0) {
      selectedItem.push(itemvalue);
    } else {
      selectedItem.splice(indexOf, 1);
    }
    handleSelected(selectedItem);
  };

  const renderCategories = () =>
    listItems.map((category) => (
      <div
        className={`relevance-category ${
          updatedSelectedItems.includes(category) ? "selected-category" : ""
        }`}
        key={category}
        onClick={onSelect}
        data-itemvalue={category}
      >
        {category}
      </div>
    ));

  return (
    <>
      <div className="relevance">
        <label className="info-text">Select upto three</label>
        <div className="relevance-categories">{renderCategories()}</div>
      </div>
    </>
  );
};

export default Relevance;
