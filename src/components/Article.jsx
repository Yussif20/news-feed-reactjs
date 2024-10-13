/* eslint-disable react/prop-types */
const Article = ({ name, title, description, content, date, url, img }) => {
  return (
    <article className="h-full rounded bg-gray-50 p-3 pb-9 shadow-md dark:bg-gray-800 w-[400px] dark:text-gray-50">
      <img className="mb-4 h-40 w-full rounded-md" src={img} alt="urlToImage" />
      <a target="_blank" href={url} className="text-2xl">
        {title}
      </a>
      <p className="my-4">{description}</p>
      <p className="my-4">{content}</p>
      <p>published at: {date}</p>
      <p className="text-sm text-right">By: {name}</p>
    </article>
  );
};

export default Article;
