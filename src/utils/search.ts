import { TOPIC_DESCRIPTION, TOPIC_TITLE } from "@constants";
import { IGetFilteredTopics, ITopic, TSearchResults } from "@types";

const searchHandler = (searchInput: string, searchValue: string) =>
  searchInput.toLowerCase().includes(searchValue);

/**
 * returns true when the passed topic value is part of the search value.
 * @param Topic as a input
 * @param selectedRelavance as input
 */
export const searchTopics = (
  topic: ITopic,
  { searchValue = "", searchBy = "" }: IGetFilteredTopics
) => {
  const { topic_short_description, topic_title } = topic;
  if (searchValue === "") {
    return true;
  } else if (searchBy !== "") {
    return searchHandler(topic[searchBy], searchValue);
  } else {
    return (
      searchHandler(topic_title, searchValue) ||
      searchHandler(topic_short_description, searchValue)
    );
  }
};

export const getSearchResults = (topics: ITopic[], searchValue: string) => {
  const searchResults: TSearchResults[] = [];
  topics.forEach(({ topic_short_description, topic_title }) => {
    if (searchHandler(topic_title, searchValue)) {
      searchResults.push({ searchBy: TOPIC_TITLE, searchvalue: topic_title });
    } else if (searchHandler(topic_short_description, searchValue)) {
      searchResults.push({
        searchBy: TOPIC_DESCRIPTION,
        searchvalue: topic_short_description,
      });
    }
  });
  return searchResults;
};
