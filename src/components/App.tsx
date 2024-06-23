import { useEffect } from "react";
import { getTopicLists } from "../actions/topic";
import { loadTopcis, setInitialDetails } from "@reducers";
import { useDispatch, useSelector } from "react-redux";
import AppSection from "./app-section";
import AppLoader from "./common/app-loader";
import { RootState } from "@store";

const App = () => {
  const dispatch = useDispatch();
  const isAppLoaded = useSelector(
    (state: RootState) => state.topic.isAppLoaded
  );

  useEffect(() => {
    getTopicLists().then((data) => {
      const { categories } = data;
      dispatch(setInitialDetails([...categories]));
      dispatch(loadTopcis(data));
    });
  }, []);

  return (
    <div className="app">{isAppLoaded ? <AppSection /> : <AppLoader />}</div>
  );
};

export default App;
