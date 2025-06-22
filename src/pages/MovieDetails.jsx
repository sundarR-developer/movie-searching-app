import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../api/omdbApi';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchDetails() {
      try {
        const data = await getMovieDetails(id);
        if (data.Response === 'True') setMovie(data);
        else setError(data.Error);
      } catch {
        setError("Something went wrong!");
      }
    }
    fetchDetails();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="mx-auto p-4 container">
      <Link to="/" className="text-blue-500">← Back to search</Link>
      <div className="flex md:flex-row flex-col gap-4 mt-4">
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x445'}
             alt={movie.Title} className="w-full md:w-1/3 object-cover" />
        <div>
          <h1 className="font-bold text-3xl">{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Ratings:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
