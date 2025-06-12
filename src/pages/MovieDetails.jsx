import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../services/omdbApi';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p className="p-4 text-white">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 shadow-xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img 
              className="w-full rounded-lg shadow-lg" 
              src={movie.Poster} 
              alt={movie.Title}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
              }}
            />
          </div>
          <div className="md:w-2/3 text-white">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {movie.Title}
            </h1>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <span className="text-blue-400 font-semibold">Year:</span>
                <span>{movie.Year}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-blue-400 font-semibold">Genre:</span>
                <span>{movie.Genre}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-blue-400 font-semibold">Director:</span>
                <span>{movie.Director}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-blue-400 font-semibold">Runtime:</span>
                <span>{movie.Runtime}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-blue-400 font-semibold">IMDb Rating:</span>
                <span>{movie.imdbRating}</span>
              </p>
              <div className="mt-4">
                <p className="text-blue-400 font-semibold mb-2">Plot:</p>
                <p className="text-white/90 leading-relaxed">{movie.Plot}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
