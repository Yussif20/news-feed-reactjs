import { useEffect } from 'react';
import Header from './components/Header';

const API_KEY = `26351322a87d4ac39426f53416902b3c`;
const COUNTRY = `us`;
const URL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;

function App() {
  // const fetchNewsData = () => {
  //   fetch(URL)
  //     .then((res) => {
  //       if (res.status === 'ok') {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => console.log(data));
  // };
  // useEffect(() => {
  //   fetchNewsData();
  // }, []);
  return (
    <article className="font-roboto">
      <Header />
      <p>{URL}</p>
    </article>
  );
}

export default App;
