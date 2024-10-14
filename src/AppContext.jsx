/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('business');
  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        country,
        setCountry,
        category,
        setCategory,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
