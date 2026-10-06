import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './useContext/CartContext';
import { AuthProvider, useAuth } from './useContext/AuthContext';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Cart from './useContext/Cart';
import Login from './Login/Login1';
import Navbar from './components/Navbar'; // Import Navbar
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ element: Component }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

function App() {
  const [movies, setMovies] = useState([]);

  // Fetch movies
  useEffect(() => {
    fetch('https://backend-crud-one.vercel.app/product')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="app-container">
            <Navbar /> {/* Navbar added here */}
            <Routes>
              {/* Login Page */}
              <Route path="/" element={<Login />} />
              {/* Movie List (Protected) */}
              <Route
                path="/movies"
                element={<ProtectedRoute element={() => <MovieList movies={movies} />} />}
              />
              {/* Movie Details (Protected) */}
              <Route
                path="/movie/:id"
                element={<ProtectedRoute element={MovieDetails} />}
              />
              {/* Cart Page (Protected) */}
              <Route path="/cart" element={<ProtectedRoute element={Cart} />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
