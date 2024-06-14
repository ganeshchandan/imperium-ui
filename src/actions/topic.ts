import { ITopic } from "../type";

const APP_URL = "https://imperium-server-uat.netlify.app";

export const getTopicLists = async () => {
  const topicResponse = await fetch(`${APP_URL}/news/getNews`);
  return await topicResponse.json();
};

// export const bookmarkTopic = async (topic: ITopic) => {
//   const bookmarkCreateResponse = await fetch(`${APP_URL}/bookmark/create`, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ bookmark: topic }),
//   });
//   return await bookmarkCreateResponse.json();
// };

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
