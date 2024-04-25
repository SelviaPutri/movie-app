import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../services/api';
import SearchBar from './SearchBar';
import StarRating from './StarRating';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/movie/popular');
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = (query, genreFilter) => {
    setSearchQuery(query);
    const filtered = movies.filter((movie) => {
      const titleMatches = movie.title.toLowerCase().includes(query.toLowerCase());
      const genreMatches =
        genreFilter === '' || (movie.genres && movie.genres.some((genre) => genre.name.toLowerCase() === genreFilter.toLowerCase()));
      return titleMatches && genreMatches;
    });

    setFilteredMovies(filtered);
  };

  return (
    <div className="movie-list-container">
      <h2 className="movie-list-heading">Popular Movies</h2>
      <SearchBar onSearch={handleSearch} onFilterChange={(filter) => console.log(filter)} />
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            </Link>
            <Link to={`/movies/${movie.id}`} className="movie-title-link">
              <span className="movie-title">{movie.title}</span>
            </Link>
            <StarRating initialValue={null} onRate={(value) => console.log(value)} />
          </div>
        ))}
        {searchQuery && filteredMovies.length === 0 && (
          <p>No movies found for '{searchQuery}'</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
