import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message || 'Error loading movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-600 hover:text-blue-800"
        >
          ← Back to Search
        </button>
      </div>
    );
  }

  if (!movie) {
    return null;
  }

  // Split genres into an array
  const genres = movie.Genre ? movie.Genre.split(', ') : [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Search
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
              alt={movie.Title}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{movie.Title}</h1>
            
            {/* Movie Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Year</h2>
                <p className="text-gray-600">{movie.Year}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Type</h2>
                <p className="text-gray-600 capitalize">{movie.Type}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">IMDB Rating</h2>
                <p className="text-gray-600">{movie.imdbRating || 'N/A'}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Runtime</h2>
                <p className="text-gray-600">{movie.Runtime || 'N/A'}</p>
              </div>
            </div>

            {/* Genres */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {genres.map((genre, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Plot */}
            {movie.Plot && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Plot</h2>
                <p className="text-gray-600">{movie.Plot}</p>
              </div>
            )}

            {/* Additional Info */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Director</h2>
                <p className="text-gray-600">{movie.Director || 'N/A'}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Actors</h2>
                <p className="text-gray-600">{movie.Actors || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail; 