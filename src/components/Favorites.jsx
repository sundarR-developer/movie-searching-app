import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';

const Favorites = ({ favorites, onToggleFavorite }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">My Favorite Movies</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Back to Search
          </button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">My Favorite Movies</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Back to Search
          </button>
        </div>
      )}
      {favorites.length === 0 ? (
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-600 text-base sm:text-lg">You haven't added any movies to your favorites yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onToggleFavorite={onToggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites; 