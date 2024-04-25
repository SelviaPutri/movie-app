// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch, onFilterChange }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearch = () => {
    onSearch(query, filter);
  };

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    onFilterChange(selectedFilter);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select onChange={handleFilterChange} value={filter}>
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Comedy">Comedy</option>
        {/* Tambahkan genre lain sesuai kebutuhan */}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
