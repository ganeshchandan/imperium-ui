import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { ITopicListHeader } from "@types";
import { TOPIC_LIST, VIEW_TYPE_SWITCH } from "@constants";
import { updateApplicationView } from "@reducers";
import { DispalyGrid, ListView } from "@assets";
import IconWithName from "../../common/icon-with-name";

const TopicListheader = forwardRef<HTMLDivElement, ITopicListHeader>(
  ({ selectedCategory, viewType }, listHeaderRef) => {
    const dispatch = useDispatch();

    const viewTypeSwitch = () => {
      dispatch(updateApplicationView(VIEW_TYPE_SWITCH[viewType]));
    };

    return (
      <div className="list-header" ref={listHeaderRef}>
        <div className="category-name-image">
          <label className="category-name">{selectedCategory}</label>
          <IconWithName
            className="category-image"
            imageUrl={viewType === TOPIC_LIST ? DispalyGrid : ListView}
            imageAlt="dispaly-type"
            onClick={viewTypeSwitch}
          />
        </div>
      </div>
    );
  }
);

export default TopicListheader;
