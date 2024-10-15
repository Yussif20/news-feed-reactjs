/* eslint-disable react/prop-types */
const Article = ({ name, title, description, date, url, img }) => {
  return (
    <article className="flex flex-col justify-between h-full rounded bg-gray-50 p-3 pb-9 shadow-md dark:bg-gray-800 lg:w-[400] md:w-[350px] w-[320px] dark:text-gray-50">
      <img className="mb-4 h-40 w-full rounded-md" src={img} alt="urlToImage" />
      <a target="_blank" href={url} className="text-2xl">
        {title}
      </a>
      <p className="my-4">{description}</p>
      <div className="w-full flex items-center justify-between self-end">
        <p>published at: {date}</p>
        <p className="text-sm text-right">Source: {name}</p>
      </div>
    </article>
  );
};

export default Article;
