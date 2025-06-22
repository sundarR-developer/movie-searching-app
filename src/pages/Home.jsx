import React, { useState, useEffect } from 'react';
import { searchMovies } from '../api/omdbApi';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import Pagination from '../components/Pagination';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query) fetchMovies();
  }, [query, type, page]);

  const fetchMovies = async () => {
    try {
      const data = await searchMovies(query, type, page);
      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults));
        setError('');
      } else {
        setMovies([]);
        setTotalResults(0);
        setError(data.Error);
      }
    } catch {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="mx-auto p-4 container">
      <h1 className="mb-4 font-bold text-3xl text-center">Movie Search App 🎬</h1>
      <SearchBar onSearch={(q) => { setQuery(q); setPage(1); }} />
      <FilterDropdown onSelect={(t) => { setType(t); setPage(1); }} />
      {error && <p className="text-red-500">{error}</p>}
      <div className="gap-4 grid grid-cols-2 md:grid-cols-4 mt-4">
        {movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
      {totalResults > 10 && (
        <Pagination 
          totalPages={Math.ceil(totalResults / 10)}
          currentPage={page}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default Home;
