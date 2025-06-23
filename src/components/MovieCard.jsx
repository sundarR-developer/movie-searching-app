import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const handleViewDetails = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
  };

  return (
    <div className="w-full px-4 flex justify-center">
      <div className="group relative flex flex-col h-full w-full max-w-[280px] sm:max-w-xs bg-white rounded-lg shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
        {/* Poster Image */}
        <div className="relative w-full aspect-[2/3] overflow-hidden rounded-t-[10px]">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
            alt={movie.Title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:brightness-75"
            onError={handleImageError}
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
            <div className="flex flex-col gap-3 items-center text-white">
              <button
                onClick={handleViewDetails}
                className="px-4 py-2 rounded-lg bg-blue-600/90 text-white font-semibold shadow hover:bg-blue-700/90 hover:scale-105 transition-all duration-200"
              >
                View Details
              </button>
              <button
                onClick={() => toggleFavorite(movie)}
                className="bg-white/90 border-2 border-red-200 text-red-500 p-2 rounded-full shadow hover:bg-red-100 hover:scale-110 transition-all duration-200"
                aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${isFavorite ? 'fill-current' : 'stroke-current'}`}
                  viewBox="0 0 24 24"
                  strokeWidth={isFavorite ? '0' : '2'}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Movie Content */}
        <div className="flex flex-col flex-1 p-4 gap-2">
          <h3 className="text-base sm:text-lg font-bold text-black mb-1 line-clamp-2 text-center">
            {movie.Title}
          </h3>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold shadow-sm">
              {movie.Year}
            </span>
            <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium capitalize shadow-sm">
              {movie.Type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
