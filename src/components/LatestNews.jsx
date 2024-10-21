import { useEffect, useState } from "react";
import LatestNewsItem from "./LatestNewsItem";

const LatestNews = () => {
  const [newsArray, setNewsArray] = useState([]);
  // useEffect to retrieve only once per page visit. API allows max 100 a day.
  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/search?q=medical&lang=en&country=us&max=3&in=medical&apikey=${
            import.meta.env.VITE_LATEST_NEWS_API_KEY
          }`
        );

        const results = await response.json();

        setNewsArray(results.articles);
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
  }, []);

  return (
    <div>
      {newsArray?.length > 0 ? (
        <div>
          {newsArray.map((item) => {
            return (
              <LatestNewsItem
                key={item.title}
                title={item.title}
                content={item.content}
                image={item.image}
                url={item.url}
                publishDate={item.publishedAt}
              />
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default LatestNews;
