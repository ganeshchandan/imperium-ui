import { useSelector } from "react-redux";
import { RootState } from "@store";
import Filter from "./filter";
import Loader from "./common/loader";
import SearchTopic from "./search";
import Topics from "./topics";

const AppSection = () => {
  const { isLoading, isSearchBox } = useSelector(
    (state: RootState) => state.topic
  );

  return (
    <>
      {isLoading && <Loader />}
      {isSearchBox && <SearchTopic />}
      <Topics />
      <Filter />
    </>
  );
};

export default AppSection;
