import { IGetFilteredTopics, ITopic, TFilterType } from "../type";

const bookmarkFilter = ({ topics, selectedRelavance }: IGetFilteredTopics) =>
  topics.filter(
    ({ topic_category, bookmark_id }) =>
      bookmark_id &&
      (selectedRelavance.length === 0 ||
        selectedRelavance.includes(topic_category))
  );

const categoryFilter = ({
  topics,
  selectedCategory,
  selectedRelavance,
}: IGetFilteredTopics) =>
  topics.filter(
    ({ topic_category }) =>
      (selectedCategory.length === 0 ||
        selectedCategory.includes(topic_category)) &&
      (selectedRelavance.length === 0 ||
        selectedRelavance.includes(topic_category))
  );

const filterTypeFunctionMapper: {
  [key: string]: (filterDetails: IGetFilteredTopics) => ITopic[];
} = {
  bookmark: bookmarkFilter,
  category: categoryFilter,
};

export const getFilteredTopics = (
  filterType: TFilterType,
  filterDetails: IGetFilteredTopics
) => {
  return filterTypeFunctionMapper[filterType](filterDetails);
};
