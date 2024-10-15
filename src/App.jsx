import Layout from './components/Layout';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AppContextProvider from './AppContext';
import CategoryMenu from './components/CategoryMenu';

function App() {
  return (
    <main className="font-roboto bg-white dark:bg-gray-950">
      <Header />
      <AppContextProvider>
        <div className="flex items-center flex-col gap-8 sm:flex-row sm:gap-0 justify-center my-12 mx-6">
          <SearchBar />
          <CategoryMenu />
        </div>
        <Layout />
      </AppContextProvider>
    </main>
  );
}

export default App;
