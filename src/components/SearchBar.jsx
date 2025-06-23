import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto animate-slide-in mb-8 md:mb-12 px-4">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search for movies, series, or episodes..."
          className="w-full pl-4 pr-28 sm:pl-6 sm:pr-36 md:pr-40 py-3 sm:py-4 text-base sm:text-lg bg-white/90 backdrop-blur-md border-2 border-transparent rounded-full text-black placeholder-black/60 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400 transition-all duration-300 shadow-lg group-hover:shadow-xl"
        />
        <button
          type="submit"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 text-sm sm:text-base rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!query.trim()}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;


