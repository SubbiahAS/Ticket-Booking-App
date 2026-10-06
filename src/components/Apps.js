import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './useContext/CartContext'; // Ensure this path matches your file structure
import MovieList from './components/MovieList'; // MovieList component
import MovieDetails from './components/MovieDetails'; // MovieDetails component
import Cart from './useContext/Cart'; // Ensure Cart component path matches your file structure
import './App.css'; // Global styles

function App() {
  const [movies, setMovies] = useState([]);

  // Fetch movies from the API
  useEffect(() => {
    fetch('https://backend-crud-one.vercel.app/product')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="app-container">
        <nav>
        <Link to="/">Home</Link> 
        <Link to="/cart">Cart</Link> {/* Add this */}
      </nav>
          <h1>Movie List</h1>
          <Routes>
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/" element={<MovieList movies={movies} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
