// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Movie-themed animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Film reel animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-film-reel">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDEuMTA0LS44OTYgMi0yIDJzLTItLjg5Ni0yLTJjMC0xLjEwNC44OTYtMiAyLTJzMiAuODk2IDIgMnptMCAwYzAgMS4xMDQtLjg5NiAyLTIgMnMtMi0uODk2LTItMmMwLTEuMTA0Ljg5Ni0yIDItMnMyIC44OTYgMiAyem0wIDBjMCAxLjEwNC0uODk2IDItMiAyczItLjg5NiAyLTJjMC0xLjEwNC44OTYtMiAyLTJzMiAuODk2IDIgMnptMCAwYzAgMS4xMDQtLjg5NiAyLTIgMnMtMi0uODk2LTItMmMwLTEuMTA0Ljg5Ni0yIDItMnMyIC44OTYgMiAyem0wIDBjMCAxLjEwNC0uODk2IDItMiAyczItLjg5NiAyLTJjMC0xLjEwNC44OTYtMiAyLTJzMiAuODk2IDIgMnoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')]"></div>
          </div>
        </div>

        {/* Floating movie elements */}
        <div className="absolute inset-0">
          {/* Film strip - moves from left to right */}
          <div className="absolute top-1/3 left-0 w-16 h-16 animate-slide-right">
            <svg className="w-full h-full text-white/10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
            </svg>
          </div>

          {/* Camera lens - moves diagonally */}
          <div className="absolute top-1/4 right-0 w-12 h-12 animate-slide-diagonal">
            <svg className="w-full h-full text-white/10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>
          </div>

          {/* Menu - moves from bottom to top */}
          <div className="absolute bottom-0 left-1/2 w-14 h-14 animate-slide-up">
            <svg className="w-full h-full text-white/10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
          </div>

          {/* Additional floating elements */}
          <div className="absolute top-1/2 right-1/4 w-10 h-10 animate-float-slow">
            <svg className="w-full h-full text-white/10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z"/>
              <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>

          <div className="absolute bottom-1/3 left-1/4 w-12 h-12 animate-float">
            <svg className="w-full h-full text-white/10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-600 transition-all duration-300">
                MovieSearch
              </Link>
              <div className="space-x-6">
                <Link 
                  to="/favorites" 
                  className="text-white/90 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Favorites
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
