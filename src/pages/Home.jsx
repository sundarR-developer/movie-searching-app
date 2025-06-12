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

export default Home;
