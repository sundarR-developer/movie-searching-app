const API_KEY = '44344b13';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query, type = '', page = 1) => {
  try {
    let url = `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`;
    if (type) url += `&type=${type}`;
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    throw err;
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`);
    return await res.json();
  } catch (err) {
    throw err;
  }
};
