export const getTopicLists = async () => {
  const topicResponse = await fetch(
    `https://imperium-server.netlify.app/news/getNews`
  );
  return await topicResponse.json();
};
