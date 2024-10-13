/* eslint-disable react/prop-types */

import GalleryItem from './GalleryItem';

const Gallery = ({ articles }) => {
  return (
    <div className="ml-8 grid grid-cols-2 grid-rows-2 items-center justify-around max-w-fit">
      {articles?.map((article, index) => {
        while (index < 4) {
          console.log(article.title);
          return (
            <GalleryItem
              key={index}
              className="col-span-1 row-span-1"
              tile={article.title}
              image={article.urlToImage}
              url={article.url}
            />
          );
        }
      })}
    </div>
  );
};

export default Gallery;
