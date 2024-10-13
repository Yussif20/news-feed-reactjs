import Layout from './components/Layout';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RegionMenu from './components/RegionMenu';

function App() {
  return (
    <article className="font-roboto bg-white dark:bg-gray-950">
      <Header />

      <div className="flex items-center justify-center my-12 mx-6">
        <SearchBar />
        <RegionMenu />
      </div>
      <Layout />
    </article>
  );
}

export default App;
