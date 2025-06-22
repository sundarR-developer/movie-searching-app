import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto animate-slide-in mb-8 md:mb-12 px-4 sm:px-6 md:px-8">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl bg-white/90 backdrop-blur-md border-2 border-[var(--border-color)] rounded-full text-black placeholder-black/60 focus:outline-none focus:border-blue-500 transition-all duration-300 group-hover:bg-white shadow-sm hover:shadow-md"
        />
        <button
          type="submit"
          className="absolute right-1 sm:right-2 md:right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 text-sm sm:text-base md:text-lg rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
