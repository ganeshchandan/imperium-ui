import { IBookmarkedTopics, ITopic } from "../type";

export const formatDescription = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.innerText || "";
};

export const getUpdatedBookmarkId = (
  topics: ITopic[],
  selectedTopicTitle: string,
  bookmarkId: number | null
) =>
  topics.map((topic) => {
    const { topic_title } = topic;
    if (selectedTopicTitle === topic_title) {
      return {
        ...topic,
        bookmark_id: bookmarkId,
        bookmarked_date: new Date().toString(),
      };
    }
    return { ...topic };
  });

export const getBookmarkTopicId = (
  bookmarkedTopics: IBookmarkedTopics,
  topic_title: string
) => {
  const bookmarkedTopic = bookmarkedTopics[topic_title] || {
    isLoading: false,
  };
  return bookmarkedTopic;
};

export * from "./swipe";
export * from "./filter";
export * from "./bookmark";
