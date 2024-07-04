import { IBookmarkedTopics, ITopic } from "@types";

export const formatDescription = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.innerText || "";
};

export const getBookmarkTopicId = (
  bookmarkedTopics: IBookmarkedTopics,
  topic_title: string
) => {
  const bookmarkedTopic = bookmarkedTopics[topic_title] || {
    isLoading: false,
  };
  return bookmarkedTopic;
};

export const updateRecentlyviewedTopicList = (
  recentlyViewedTopics: ITopic[],
  selectedTopic: ITopic
) => {
  const {
    topic_title: selectedTopicTitile,
    topic_category,
    topic_id,
    topic_image,
    topic_read_time,
    topic_saved_date,
    topic_short_description,
    author,
  } = selectedTopic;
  recentlyViewedTopics = recentlyViewedTopics.filter(
    ({ topic_title }) => selectedTopicTitile !== topic_title
  );

  recentlyViewedTopics = [
    {
      topic_title: selectedTopicTitile,
      topic_category,
      topic_id,
      topic_image,
      topic_read_time,
      topic_saved_date,
      topic_short_description,
      author,
      bookmark_id: null,
      bookmarked_date: "",
      topic_link: "",
    },
    ...recentlyViewedTopics,
  ];

  return recentlyViewedTopics.splice(0, 10);
};

export const isSwipeActionModal = () =>
  localStorage.getItem("hideSwipeActionModal");

export const setSwipeActionModal = () =>
  localStorage.setItem("hideSwipeActionModal", "true");

export * from "./swipe";
export * from "./filter";
export * from "./bookmark";
