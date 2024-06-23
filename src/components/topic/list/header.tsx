import { FC } from "react";
import { useDispatch } from "react-redux";
import { ITopicListHeader } from "@types";
import { TOPIC_LIST, VIEW_TYPE_SWITCH } from "@constants";
import { updateApplicationView } from "@reducers";
import { DispalyGrid, ListView } from "@assets";

const TopicListheader: FC<ITopicListHeader> = ({
  selectedCategory,
  viewType,
}) => {
  const dispatch = useDispatch();

  const viewTypeSwitch = () => {
    dispatch(updateApplicationView(VIEW_TYPE_SWITCH[viewType]));
  };

  return (
    <div className="list-header">
      <div className="category-name-image">
        <label className="category-name">{selectedCategory[0] || ""}</label>
        <div className="category-image">
          <img
            src={viewType === TOPIC_LIST ? DispalyGrid : ListView}
            alt="dispaly-type"
            onClick={viewTypeSwitch}
          />
        </div>
      </div>
    </div>
  );
};

export default TopicListheader;
