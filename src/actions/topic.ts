export const getTopicLists = async () => {
  const topicResponse = await fetch(`http://localhost:3000/news/getNews`);
  return await topicResponse.json();
};
