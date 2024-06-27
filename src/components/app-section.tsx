import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import Filter from "./filter";
import Loader from "./common/loader";
import SearchTopic from "./search";
import Topics from "./topics";
import SwipeComponent from "./Swipe";
import { setShowFilter } from "@reducers";

const FilterSwipe = SwipeComponent(Filter);

const AppSection = () => {
  const { isLoading, isSearchBox } = useSelector(
    (state: RootState) => state.topic
  );
  const dispatch = useDispatch();

  const filterSwipeDown = () => {
    dispatch(setShowFilter(false));
  };

  return (
    <>
      {isLoading && <Loader />}
      {isSearchBox && <SearchTopic />}
      <Topics />
      <FilterSwipe swipeDown={filterSwipeDown} />
    </>
  );
};

export default AppSection;
