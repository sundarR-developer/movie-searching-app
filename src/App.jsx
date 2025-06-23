import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import FilterDropdown from './components/FilterDropdown';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetail';
import Favorites from './components/Favorites';
import { searchMovies } from './services/api';
import { useFavorites } from './context/FavoritesContext';

function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    year: '',
    sortBy: 'Title'
  });
  const { favorites, toggleFavorite } = useFavorites();

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(query, 1, filters.year);
      if (data.Response === 'True') {
        let filteredMovies = data.Search;
        
        // Apply type filter
        if (filters.type) {
          filteredMovies = filteredMovies.filter(movie => movie.Type === filters.type);
        }

        // Apply sorting
        filteredMovies.sort((a, b) => {
          const aValue = (a[filters.sortBy] || '').toString().toLowerCase();
          const bValue = (b[filters.sortBy] || '').toString().toLowerCase();
          return aValue.localeCompare(bValue);
        });

        setMovies(filteredMovies);
        setTotalPages(Math.ceil(parseInt(data.totalResults) / 10));
      } else {
        setMovies([]);
        setError('No movies found');
      }
    } catch (err) {
      setError(err.message || 'Error searching movies');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = async (filterType, value) => {
    const newFilters = {
      ...filters,
      [filterType]: value
    };
    setFilters(newFilters);

    // If we have a search query, perform a new search with updated filters
    if (searchQuery) {
      setLoading(true);
      try {
        const data = await searchMovies(searchQuery, currentPage, newFilters.year);
        if (data.Response === 'True') {
          let filteredMovies = data.Search;
          // Apply type filter
          if (newFilters.type) {
            filteredMovies = filteredMovies.filter(movie => movie.Type === newFilters.type);
          }
          // Apply sorting
          filteredMovies.sort((a, b) => {
            const aValue = (a[newFilters.sortBy] || '').toString().toLowerCase();
            const bValue = (b[newFilters.sortBy] || '').toString().toLowerCase();
            return aValue.localeCompare(bValue);
          });
          setMovies(filteredMovies);
        } else {
          setMovies([]);
          setError('No movies found');
        }
      } catch (err) {
        setError(err.message || 'Error applying filters');
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePageChange = async (page) => {
    setCurrentPage(page);
    setLoading(true);
    try {
      const data = await searchMovies(searchQuery, page, filters.year);
      if (data.Response === 'True') {
        let filteredMovies = data.Search;
        
        // Apply type filter
        if (filters.type) {
          filteredMovies = filteredMovies.filter(movie => movie.Type === filters.type);
        }

        // Apply sorting
        filteredMovies.sort((a, b) => {
          const aValue = (a[filters.sortBy] || '').toString().toLowerCase();
          const bValue = (b[filters.sortBy] || '').toString().toLowerCase();
          return aValue.localeCompare(bValue);
        });

        setMovies(filteredMovies);
      } else {
        setMovies([]);
        setError('No movies found');
      }
    } catch (err) {
      setError(err.message || 'Error changing page');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Movie Search</h1>
            <button
              onClick={() => navigate('/favorites')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Favorites ({favorites.length})
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              {/* Search Section */}
              <SearchBar onSearch={handleSearch} />

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <FilterDropdown
                  label="Type"
                  value={filters.type}
                  onChange={(value) => handleFilterChange('type', value)}
                  options={[
                    { value: '', label: 'All Types' },
                    { value: 'movie', label: 'Movies' },
                    { value: 'series', label: 'TV Series' },
                    { value: 'episode', label: 'Episodes' }
                  ]}
                />
                <FilterDropdown
                  label="Year"
                  value={filters.year}
                  onChange={(value) => handleFilterChange('year', value)}
                  options={[
                    { value: '', label: 'All Years' },
                    ...Array.from({ length: 30 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return {
                        value: year.toString(),
                        label: year.toString()
                      };
                    })
                  ]}
                />
                <FilterDropdown
                  label="Sort By"
                  value={filters.sortBy}
                  onChange={(value) => handleFilterChange('sortBy', value)}
                  options={[
                    { value: 'Title', label: 'Title' },
                    { value: 'Year', label: 'Year' },
                    { value: 'Type', label: 'Type' }
                  ]}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 animate-fade-in">
                  {error}
                </div>
              )}

              {/* Loading State */}
              {loading && (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              )}

              {/* Movies Grid */}
              {!loading && movies.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {movies.map((movie) => (
                    <MovieCard
                      key={movie.imdbID}
                      movie={movie}
                      onToggleFavorite={toggleFavorite}
                      isFavorite={favorites.some(fav => fav.imdbID === movie.imdbID)}
                    />
                  ))}
                </div>
              )}

              {/* No Results */}
              {!loading && movies.length === 0 && !error && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No movies found. Try a different search term.</p>
                </div>
              )}

              {/* Pagination */}
              {movies.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          } />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={
            <Favorites
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          } />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
