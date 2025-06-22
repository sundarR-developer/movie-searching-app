<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, onToggleFavorite, isFavorite }) => {
  const navigate = useNavigate();

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
                onClick={() => onToggleFavorite(movie)}
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
=======
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

function MovieCard({ movie }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(movie.imdbID);

  return (
    <div className="group relative bg-black/30 backdrop-blur-md rounded-xl overflow-hidden h-full flex flex-col border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10">
      {/* Poster Image with Overlay */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={movie.Poster} 
          alt={movie.Title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/movie/${movie.imdbID}`}
            className="transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              View Details
            </button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-grow flex flex-col">
        <h2 className="font-bold text-lg mb-1 line-clamp-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
          {movie.Title}
        </h2>
        <p className="text-white/70 mb-4">{movie.Year}</p>
        
        {/* Favorite Button */}
        <div className="mt-auto">
          <button
            onClick={() => favorite ? removeFavorite(movie.imdbID) : addFavorite(movie)}
            className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            {favorite ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Remove from Favorites
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Add to Favorites
              </>
            )}
          </button>
>>>>>>> 6a343bd2765c2db80c287955ea89e6df5a5a878c
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> 6a343bd2765c2db80c287955ea89e6df5a5a878c

export default MovieCard;
