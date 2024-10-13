/* eslint-disable react/prop-types */
import Select from 'react-select';

const options = [
  { value: 'all regions', label: 'All regions' },
  { value: 'africa', label: 'Africa' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
  { value: 'americas', label: 'Americas' },
  { value: 'antarctic', label: 'Antarctic' },
];

const RegionMenu = ({ countryList, setFilteredCountries }) => {
  const regionChangeHandler = (e) => {
    const region = e.label;
    const filteredList =
      region === 'All regions'
        ? countryList
        : countryList.filter((country) => country.region === region);
    setFilteredCountries(filteredList);
  };
  return (
    <Select
      defaultValue={options[0]}
      onChange={regionChangeHandler}
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

export default RegionMenu;
