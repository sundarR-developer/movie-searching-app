import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setHasSubmitted(true);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setHasSubmitted(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative group">
        {/* Search Input */}
        <div className={`relative flex items-center transition-all duration-300 ${isFocused ? 'scale-105' : 'scale-100'}`}>
          <div className="absolute left-4 text-white/50 group-hover:text-white/70 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
            placeholder="Search for movies..."
            value={query}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* Search Button */}
          <button
            type="submit"
            className="absolute right-2 p-2 bg-gradient-to-r from-blue-500/80 to-purple-600/80 rounded-lg text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            disabled={!query.trim()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Search Suggestions - Only show if query exists and hasn't been submitted */}
        {query && !hasSubmitted && (
          <div className="absolute w-full mt-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transform origin-top transition-all duration-300">
            <div className="p-4 text-white/70 text-sm">
              Press Enter to search for "{query}"
            </div>
          </div>
        )}
      </form>

      {/* Search Tips */}
      <div className="mt-4 flex items-center justify-center gap-4 text-white/50 text-sm">
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Search by title
        </span>
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Press Enter to search
        </span>
      </div>
    </div>
  );
}

export default SearchBar;

