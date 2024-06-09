export const getTopicLists = async () => {
  const topicResponse = await fetch(
    `https://imperium-server-dev.netlify.app/news/getNews`
  );
  return await topicResponse.json();
};
