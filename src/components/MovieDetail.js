import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';
import StarRating from './StarRating';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [userRating, setUserRating] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  const handleRate = (value) => {
    // Simpan rating pengguna ke server (gunakan API TMDB jika tersedia)
    setUserRating(value);
  };

  return (
    <div className="movie-detail">
      {movie && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ marginBottom: '10px', textAlign: 'center' }}>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            style={{ marginBottom: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          />
          <p style={{ textAlign: 'justify', marginBottom: '20px' }}>{movie.overview}</p>
          <StarRating initialValue={userRating} onRate={handleRate} />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
