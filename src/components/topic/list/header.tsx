import { FC } from "react";
import DispalyGrid from "../../../assets/display-grid.svg";
import ListView from "../../../assets/list_view.svg";
import { ITopicListHeader } from "@types";
import { TOPIC_LIST, VIEW_TYPE_SWITCH } from "@constants";
import { useDispatch } from "react-redux";
import { updateApplicationView } from "../../../reducers/app-config";

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
