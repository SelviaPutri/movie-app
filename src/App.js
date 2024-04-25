import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1 style={{ fontFamily: 'cursive', color: '#3b5998', textAlign: 'center', fontSize: '3rem', textTransform: 'uppercase', letterSpacing: '2px', margin: '20px 0', backgroundImage: 'linear-gradient(to right, #2980B9, #6DD5FA, #ffffff)', padding: '20px', borderRadius: '10px' }}>My <span style={{ fontWeight: 'bold' }}>Movie</span></h1>
        </header>
        <nav style={{ backgroundImage: 'linear-gradient(to right, #2980B9, #6DD5FA, #ffffff)', padding: '10px', textAlign: 'center' }}>
          <SearchBar />
        </nav>
        <div className="movie-list-container">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
