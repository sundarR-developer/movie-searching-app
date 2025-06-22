const API_KEY = '4a3b711b'; // OMDB API key
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query, page = 1, year = '') => {
  try {
    let url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`;
    
    // Add year parameter if provided
    if (year) {
      url += `&y=${year}`;
    }
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.Error) {
      throw new Error(data.Error);
    }
    
    return data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
    const data = await response.json();
    
    if (data.Error) {
      throw new Error(data.Error);
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}; 