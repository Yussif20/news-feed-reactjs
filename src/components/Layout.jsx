import { useEffect, useState } from 'react';
import Gallery from './Gallery';
import ArticlesList from './ArticlesList';

const NEWS_API_KEY = `26351322a87d4ac39426f53416902b3c`;

const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

const Layout = () => {
  const [articles, setArticles] = useState([]);

  const fetchNewsData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const result = data.articles;
        console.log(result);
        setArticles(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div>
      <Gallery articles={articles} />
      <ArticlesList articles={articles} />
    </div>
  );
};

export default Layout;
