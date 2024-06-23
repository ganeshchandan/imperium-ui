import { FC } from "react";
import { TOPIC_IMAGES } from "../../../../assets";
import { TOPIC_IMAGE } from "@constants";
import { ITopicImage } from "@types";

const TopicImage: FC<ITopicImage> = ({ topic_image }) => {
  return (
    <div className="topic-image">
      <img
        src={topic_image || TOPIC_IMAGES[`${TOPIC_IMAGE}1`]}
        alt="Topic"
        className="topic-image-tag"
      />
    </div>
  );
};

export default TopicImage;
