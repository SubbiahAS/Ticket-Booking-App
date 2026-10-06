import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../useContext/CartContext';

function MovieCard({ movie }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(movie);
    alert(`Success: Added "${movie.name}" to the cart!`);
  };

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.name} className="movie-image" />
      <h2 className="movieName">{movie.name}</h2>
      <p><strong>Ticket Price:</strong> ₹{movie.ticketprice}</p>
      <div className="button-group">
        <button onClick={handleAddToCart} className="button add-button">
          Add to Cart
        </button>
        <Link to={`/movie/${movie._id}`} className="button view-button">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
