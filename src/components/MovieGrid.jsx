import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies, onToggleFavorite, favorites }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12 md:py-16">
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600">No movies found. Try a different search!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-2 sm:p-4 md:p-6 lg:p-8">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
        />
      ))}
    </div>
  );
};

export default MovieGrid; 