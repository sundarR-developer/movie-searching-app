// src/services/omdbApi.js
const API_KEY = '44344b13';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query, page = 1) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`);
  return await res.json();
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  return await res.json();
};
