import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
//import axios from 'axios';
import Articles from './Articles/Articles.jsx';
import { fetchArticles } from '../articles-api.js';
import { SearchForm } from './SearchForm/SearchForm.jsx';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!query) return;

    console.log('useEffect triggered with:', { query, page });

    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        console.log('Fetching articles for:', query, 'Page:', page);
        const { hits } = await fetchArticles(query, page);
        //setArticles(hits, page, hitsPerPage);
        console.log('API Response Hits:', hits);
        setArticles(prevArticles =>
          page === 0 ? hits : [...prevArticles, ...hits]
        );
      } catch (err) {
        console.error('Fetching Error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleSetQuery = newQuery => {
    console.log(newQuery);
    setQuery(newQuery);

    // try {
    //   setArticles([]);
    //   setError(false);
    //   setLoading(true);
    //   const data = await fetchArticles(topic);
    //   setArticles(data);
    // } catch {
    //   setError(true);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <>
      <h1>HTTP requests</h1>

      <SearchForm onSubmit={handleSetQuery} />

      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {/* {articles.length > 0 && (markup)} */}
      <div>
        <p className="card">Latest articles</p>
        <Articles items={articles} />
        <button onClick={() => setPage(prev => prev + 1)}>Load more</button>
      </div>
    </>
  );
}

export default App;
