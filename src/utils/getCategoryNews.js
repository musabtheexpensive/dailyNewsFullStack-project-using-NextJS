export const getCategoryNews = async (category) => {
  const res = await fetch(
    `https://the-news-portal-server.vercel.app/news?category=${category}`,
    // user req onuShar a j tumi kono cache store korba na. user req onujayi server side rendering korba
    {
      cache: "no-store",
    }
  );
  return res.json();
};
