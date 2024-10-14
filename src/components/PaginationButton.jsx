/* eslint-disable react/prop-types */
const PaginationButton = ({ clickHandler, children, ...rest }) => {
  return (
    <button
      {...rest}
      className="     px-4 py-2 
    bg-gray-50 text-gray-900 
    dark:bg-gray-950 dark:text-gray-50 
    rounded-md 
    border border-gray-300 dark:border-gray-800 
    shadow-sm 
    hover:bg-gray-100 dark:hover:bg-gray-900 
    transition-all duration-200 ease-in-out 
    focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 
    active:scale-95"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
