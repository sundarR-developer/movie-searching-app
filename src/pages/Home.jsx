<<<<<<< HEAD
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
=======
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { searchMovies } from '../services/omdbApi';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    const data = await searchMovies(query);
    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      setError(data.Error);
      setMovies([]);
    }
    setLoading(false);
  };

  return (
    <div className="relative  min-h-screen">
      {/* Background grid of movie posters */}
      <div className="absolute inset-0 gap-1 grid grid-cols-6 opacity-20 pointer-events-none">
        {movies.map((movie) => (
          <img
            key={movie.imdbID}
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-32 object-cover"
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="z-10 relative mx-auto mt-6 p-4 rounded-md max-w-4xl">
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="mt-4">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
>>>>>>> 6a343bd2765c2db80c287955ea89e6df5a5a878c

export default Home;
