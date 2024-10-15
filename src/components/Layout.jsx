import { useContext, useEffect, useState } from 'react';
import ArticlesList from './ArticlesList';
import ErrorMessage from './ErrorMessage';
import { AppContext } from '../AppContext';
import { debounce } from 'lodash';
import PaginationButton from './PaginationButton';

const NEWS_API_KEY = `1b41ec2da1ac4b90a3adca52a593b529`;

const Layout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [articles, setArticles] = useState([]);
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
        if (data.status === 'error') {
          throw new Error(data.message);
        }
        const result = data.articles;
        setError('');
        setArticles(result);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, 1000);

  useEffect(() => {
    debouncedFetchNewsData(URL);
  }, [query, category, pageNumber]);

  return (
    <div>
      {isLoading && error.length === 0 && (
        <ErrorMessage message="Data is Loading..." />
      )}
      {error.length > 0 && <ErrorMessage message={error} />}

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
