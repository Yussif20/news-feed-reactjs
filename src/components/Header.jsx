import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="shadow bg-gray-100 dark:bg-gray-800 px-10">
      <div className="container h-20 mx-auto flex items-center justify-between ">
        <Logo />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
