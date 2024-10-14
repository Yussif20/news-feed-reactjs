import { useContext, useEffect, useState } from 'react';
// import Gallery from './Gallery';
import ArticlesList from './ArticlesList';
import { AppContext } from '../AppContext';

const NEWS_API_KEY = `26351322a87d4ac39426f53416902b3c`;

const Layout = () => {
  const [articles, setArticles] = useState();
  const { country, query, category } = useContext(AppContext);

  const URL = `https://newsapi.org/v2/top-headlines?${query}country=${country}&category=${category}&apiKey=${NEWS_API_KEY}`;

  const fetchNewsData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const result = data.articles;
        setArticles(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchNewsData();
    console.log(category);
  }, [query, category]);

  return (
    <div>
      {/* <Gallery articles={articles} /> */}
      <ArticlesList articles={articles} />
    </div>
  );
};

export default Layout;
