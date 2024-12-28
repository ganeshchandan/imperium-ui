import { useDispatch } from "react-redux";
import SwipeComponent from "../Swipe";
import SwipeableContent from "./swipeable-content";
import { setShowFilter } from "@reducers";

const SwipeFilterPopup = SwipeComponent(SwipeableContent);

const Filter = () => {
  const dispatch = useDispatch();

  const swipeDown = () => {
    dispatch(setShowFilter(false));
  };

  return (
    <div className="filter-popup">
      <SwipeFilterPopup swipeDown={swipeDown} />
    </div>
  );
};

export default Filter;
