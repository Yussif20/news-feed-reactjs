import { useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../AppContext';

const options = [
  { value: 'business', label: 'Business' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'general', label: 'General' },
  { value: 'health', label: 'Health' },
  { value: 'science', label: 'Science' },
  { value: 'sports', label: 'Sports' },
  { value: 'technology', label: 'Technology' },
];

const CategoryMenu = () => {
  const { setCategory } = useContext(AppContext);
  const categoryChangeHandler = (selectedOption) => {
    console.log(selectedOption.value);
    setCategory(selectedOption.value); // If you want to update the category in context
  };

  return (
    <Select
      defaultValue={options[0]}
      onChange={categoryChangeHandler}
      classNames={{
        indicatorSeparator: () => 'hidden',
        input: () => 'dark:text-gray-100',
        singleValue: () => 'dark:text-gray-800',
        option: () => 'hover:!text-gray-800',
        menu: () =>
          'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
        control: () =>
          'flex h-12 items-center justify-between gap-12 rounded-md border-none pl-4 pr-2 shadow',
      }}
      options={options}
    />
  );
};

export default CategoryMenu;
