/* eslint-disable react/prop-types */
const ErrorMessage = ({ message }) => {
  return (
    <p className="text-center text-2xl font-bold dark:text-gray-50 text-stone-950">
      {message}
    </p>
  );
};

export default ErrorMessage;
