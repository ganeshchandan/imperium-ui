import { useSelector } from "react-redux";
import { RootState } from "@store";
import Loader from "./common/loader";
import SearchTopic from "./search";
import Topics from "./topics";
import UserProfile from "./user-profile";

const AppSection = () => {
  const { isLoading } = useSelector((state: RootState) => state.topic);
  const { isSearchBox, showUserProfile } = useSelector(
    (state: RootState) => state.appConfig
  );

  return (
    <>
      {isLoading && <Loader />}
      {isSearchBox && <SearchTopic />}
      {showUserProfile && <UserProfile />}
      <Topics />
    </>
  );
};

export default AppSection;
