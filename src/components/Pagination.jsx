import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxVisiblePages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  return (
    <div className="w-full flex justify-center px-4 mt-8">
      <div className="flex flex-wrap items-center justify-center gap-2 bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-md max-w-full overflow-x-auto">
        
        {/* Prev Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-md bg-white text-black shadow hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Start Ellipsis */}
        {startPage > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="px-3 py-1 rounded-md bg-white text-black font-semibold text-sm shadow hover:bg-blue-100"
            >
              1
            </button>
            {startPage > 2 && <span className="text-sm text-gray-600 px-1">...</span>}
          </>
        )}

        {/* Visible Page Buttons */}
        {pages.slice(startPage - 1, endPage).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md text-sm font-semibold shadow transition duration-200 ${
              page === currentPage
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'bg-white text-black hover:bg-blue-100'
            }`}
          >
            {page}
          </button>
        ))}

        {/* End Ellipsis */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="text-sm text-gray-600 px-1">...</span>}
            <button
              onClick={() => onPageChange(totalPages)}
              className="px-3 py-1 rounded-md bg-white text-black font-semibold text-sm shadow hover:bg-blue-100"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-md bg-white text-black shadow hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
