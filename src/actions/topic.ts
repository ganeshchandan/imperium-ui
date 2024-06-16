import { ITopic } from "../type";

const APP_URL = import.meta.env.VITE_IMPERIUM_SERVER;
// const APP_URL = "http://localhost:3000";

export const getTopicLists = async () => {
  const topicResponse = await fetch(`${APP_URL}/news/getNews`);
  return await topicResponse.json();
};

export const deleteBookmark = async (bookmarkId: number) => {
  const bookmarkDeleteResponse = await fetch(
    `${APP_URL}/bookmark/delete?bookmarkId=${bookmarkId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "delete",
    }
  );
  return await bookmarkDeleteResponse.json();
};

export const bookmarkTopic = async (topic: ITopic) => {
  try {
    const {
      author,
      topic_short_description,
      topic_saved_date,
      topic_title,
      topic_image,
      topic_category,
    } = topic;
    const response = await fetch(`${APP_URL}/bookmark/create`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        author,
        topic_short_description,
        topic_saved_date,
        topic_title,
        topic_image,
        topic_category,
      }),
    });
    return response.json();
  } catch (err) {
    console.log("error occured");
  }
};
