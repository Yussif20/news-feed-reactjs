import { useContext, useEffect, useState } from 'react';
import ArticlesList from './ArticlesList';
import ErrorMessage from './ErrorMessage';
import { AppContext } from '../AppContext';
import { debounce } from 'lodash';
import PaginationButton from './PaginationButton';

const NEWS_API_KEY = `1b41ec2da1ac4b90a3adca52a593b529`;

const Layout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState();
  const { country, query, category } = useContext(AppContext);
  const [pageNumber, setPageNumber] = useState(1);
  const PAGE_SIZE = 6;

  const handleNextPage = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPageNumber((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const URL = `https://newsapi.org/v2/top-headlines?q=${query}&country=${country}&category=${category}&pageSize=${PAGE_SIZE}&page=${pageNumber}&apiKey=${NEWS_API_KEY}`;

  const debouncedFetchNewsData = debounce((newsUrl) => {
    setIsLoading(true);
    fetch(newsUrl)
      .then((res) => res.json())
      .then((data) => {
        const result = data.articles;
        setIsLoading(false);
        setArticles(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, 1000);

  useEffect(() => {
    debouncedFetchNewsData(URL);
  }, [query, category, pageNumber]);

  return (
    <div>
      {isLoading && <ErrorMessage message="Data is Loading..." />}
      <ArticlesList articles={articles} />
      <div className="flex justify-around mx-auto py-8 ">
        <PaginationButton
          disabled={pageNumber === 1}
          clickHandler={handlePreviousPage}
        >
          Previous
        </PaginationButton>
        <PaginationButton
          disabled={articles.length < PAGE_SIZE}
          clickHandler={handleNextPage}
        >
          Next
        </PaginationButton>
      </div>
    </div>
  );
};

export default Layout;
