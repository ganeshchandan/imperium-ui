import { ITopic } from "../type";

export const formatDescription = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.innerText || "";
};

export const getFilteredTopics = (
  topics: ITopic[],
  selectedCategory: string[],
  selectedRelavance: string[]
) => {
  return topics.filter(
    ({ topic_category }) =>
      (selectedCategory.length === 0 ||
        selectedCategory.includes(topic_category)) &&
      (selectedRelavance.length === 0 ||
        selectedRelavance.includes(topic_category))
  );
};

export * from "./swipe";
