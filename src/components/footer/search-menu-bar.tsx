import { Home } from "@assets";
import { setFilteredTopics, setSelectedCategory } from "@reducers";
import { RootState } from "@store";
import { useDispatch, useSelector } from "react-redux";

const SearchMenuBar = () => {
  const dispatch = useDispatch();
  const { topics, categories } = useSelector((state: RootState) => state.topic);

  const handleOnClick = () => {
    dispatch(setSelectedCategory(categories));
    dispatch(setFilteredTopics({ filteredTopics: topics }));
  };

  return (
    <div className="search-home-icon" onClick={handleOnClick}>
      <img src={Home} alt="menu" />
    </div>
  );
};

export default SearchMenuBar;
