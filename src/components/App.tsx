import { useEffect } from "react";
import { getTopicLists } from "../actions/topic";
import { loadTopcis } from "../reducers/topic";
import { useDispatch, useSelector } from "react-redux";
import AppSection from "./app-section";
import AppLoader from "./common/app-loader";
import { RootState } from "../store";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.topic.isLoading);

  useEffect(() => {
    getTopicLists().then((data) => {
      dispatch(loadTopcis(data));
    });
  }, []);

  return (
    <div className="app">{isLoading ? <AppLoader /> : <AppSection />}</div>
  );
};

export default App;
