import Article from './Article';

/* eslint-disable react/prop-types */
const ArticlesList = ({ articles }) => {
  return (
    <div className="py-12 max-w-full mx-auto grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
      {articles?.map((article) => {
        if (article.title === '[Removed]') return;
        return (
          <Article
            className="col-span-4"
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
