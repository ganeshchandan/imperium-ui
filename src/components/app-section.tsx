import { useSelector } from "react-redux";
import { RootState } from "@store";
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
    </>
  );
};

export default AppSection;
