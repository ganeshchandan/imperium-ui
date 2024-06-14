import { ITopic } from "../type";

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
      return { ...topic, bookmark_id: bookmarkId };
    }
    return { ...topic };
  });

export * from "./swipe";
export * from "./filter";
