import React from 'react';
import FilterDropdown from './FilterDropdown';

const FilterBar = ({ filters, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12 mt-8 animate-fade-in">
      <FilterDropdown
        label="Year"
        value={filters.year}
        onChange={(value) => onFilterChange('year', value)}
        options={[
          { value: '', label: 'All Years' },
          ...Array.from({ length: 30 }, (_, i) => {
            const year = new Date().getFullYear() - i;
            return { value: year.toString(), label: year.toString() };
          }),
        ]}
      />
      <FilterDropdown
        label="Type"
        value={filters.type}
        onChange={(value) => onFilterChange('type', value)}
        options={[
          { value: '', label: 'All Types' },
          { value: 'movie', label: 'Movies' },
          { value: 'series', label: 'TV Series' },
          { value: 'episode', label: 'Episodes' },
        ]}
      />
      <FilterDropdown
        label="Sort By"
        value={filters.sortBy}
        onChange={(value) => onFilterChange('sortBy', value)}
        options={[
          { value: 'title', label: 'Title' },
          { value: 'year', label: 'Year' },
          { value: 'type', label: 'Type' },
        ]}
      />
    </div>
  );
};

export default FilterBar; 