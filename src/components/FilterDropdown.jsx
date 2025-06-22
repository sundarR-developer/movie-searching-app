import React, { useState, useRef, useEffect } from 'react';

const FilterDropdown = ({ label, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState('bottom');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const dropdownHeight = options.length * 40; // Approximate height of dropdown

        if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
          setDropdownPosition('top');
        } else {
          setDropdownPosition('bottom');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [options.length]);

  const selectedOption = options.find(option => option.value === value) || options[0];

  return (
    <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/90 backdrop-blur-md border-2 border-[var(--border-color)] text-black px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-white transition-all duration-300 flex items-center gap-1 sm:gap-1.5 md:gap-2 group text-xs sm:text-sm md:text-base w-full"
      >
        <span className="text-black whitespace-nowrap text-xs sm:text-sm md:text-base">{label}:</span>
        <span className="font-medium text-black truncate max-w-[60px] sm:max-w-[100px] md:max-w-[150px] text-xs sm:text-sm md:text-base">{selectedOption.label}</span>
        <svg
          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-black flex-shrink-0`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div 
          className={`absolute z-10 w-full min-w-[120px] sm:min-w-[180px] md:min-w-[220px] bg-white/90 backdrop-blur-md border-2 border-[var(--border-color)] rounded-lg shadow-lg animate-scale-in ${
            dropdownPosition === 'top' 
              ? 'bottom-full mb-1 sm:mb-2' 
              : 'top-full mt-1 sm:mt-2'
          }`}
        >
          <div className="max-h-[160px] sm:max-h-[200px] md:max-h-[300px] overflow-y-auto custom-scrollbar">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-left text-black hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm md:text-base ${
                  option.value === value ? 'bg-gray-100' : ''
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
