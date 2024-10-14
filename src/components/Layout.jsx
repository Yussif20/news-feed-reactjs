import { useContext, useEffect, useState } from 'react';
// import Gallery from './Gallery';
import ArticlesList from './ArticlesList';
import { AppContext } from '../AppContext';
import { debounce } from 'lodash';

const NEWS_API_KEY = `1b41ec2da1ac4b90a3adca52a593b529`;

const Layout = () => {
  const [articles, setArticles] = useState();
  const { country, query, category } = useContext(AppContext);

  const URL = `https://newsapi.org/v2/top-headlines?${query}country=${country}&category=${category}&apiKey=${NEWS_API_KEY}`;

  // const fetchNewsData = (newsUrl) => {
  //   fetch(newsUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const result = data.articles;
  //       setArticles(result);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // };
  const debouncedFetchNewsData = debounce((newsUrl) => {
    fetch(newsUrl)
      .then((res) => res.json())
      .then((data) => {
        const result = data.articles;
        setArticles(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, 1000);

  useEffect(() => {
    debouncedFetchNewsData(URL);
    // fetchNewsData(URL);
  }, [query, category]);

  return (
    <div>
      {/* <Gallery articles={articles} /> */}
      <ArticlesList articles={articles} />
    </div>
  );
};

export default Layout;
