/* eslint-disable react/prop-types */
const GalleryItem = (props) => {
  const { image, title, url } = props;
  return (
    <div {...props}>
      <img className="w-[350px] h-[300px]" src={image} alt={title} />
      <a href={url} target="_blank">
        {title}
      </a>
    </div>
  );
};

export default GalleryItem;
