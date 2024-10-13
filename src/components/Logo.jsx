import logoImg from '../assets/news.png';

const Logo = () => {
  return (
    <a
      href="#"
      className="flex gap-3 items-center text-xl font-semibold text-gray-800 dark:text-gray-100"
    >
      <img className="max-w-8" src={logoImg} alt="Logo" />
      News Feed
    </a>
  );
};

export default Logo;
