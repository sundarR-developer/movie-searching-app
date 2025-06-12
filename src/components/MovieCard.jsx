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
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
