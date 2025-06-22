<<<<<<< HEAD
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
=======
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

export default MovieDetails;
