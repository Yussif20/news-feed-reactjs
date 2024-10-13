import { useEffect, useState } from 'react';
import Article from './Article';

const API_KEY = `26351322a87d4ac39426f53416902b3c`;
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  const fetchNewsData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const result = data.articles;
        console.log(result);
        setArticles(result); // Update state here after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchNewsData(); // Call fetchNewsData to initiate the API request
  }, []);

  return (
    <div className="py-12 max-w-full mx-auto grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 dark:bg-gray-950">
      {articles?.map((article) => {
        if (article.title === '[Removed]') return;
        else
          return (
            <Article
              key={article.title}
              name={article.source.name}
              title={article.title}
              description={article.description}
              content={article.content}
              date={new Date(article.publishedAt).toISOString().split('T')[0]}
              url={article.url}
              img={article.urlToImage}
            />
          );
      })}
    </div>
  );
};

export default ArticlesList;
