import { FC, SyntheticEvent } from "react";
import { APPLY, CANCEL, EMPTY_STRING, RESET } from "@constants";
import Button from "../common/button";
import { IFilterRelevanceAction } from "@types";

const FilterRelevanceAction: FC<IFilterRelevanceAction> = ({
  handleActionButtonClick,
}) => {
  const handleButtonClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    const { buttonname = EMPTY_STRING } = (event.target as HTMLDivElement)
      .dataset;
    handleActionButtonClick(buttonname);
  };

  return (
    <div className="filter-relevance-actions">
      <div className="filter-relevance-action">
        <Button text={CANCEL} onClick={handleButtonClick} />
      </div>
      <div className="filter-relevance-action">
        <Button text={RESET} onClick={handleButtonClick} />
      </div>
      <div className="filter-relevance-action">
        <Button text={APPLY} variant="secondary" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default FilterRelevanceAction;
