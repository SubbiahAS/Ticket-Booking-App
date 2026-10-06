// import React from 'react';
// import MovieCard from './MovieCard';  // Import MovieCard component

// function MovieList({ movies }) {
//   // Function to handle adding movie to cart
//   const handleAddToCart = (movie) => {
//     alert(`Added ${movie.name} to cart!`);
//   };

//   return (
//     <div className="movie-grid">
//       {/* Loop through movies and render a MovieCard for each movie */}
//       {movies.map(movie => (
//         <MovieCard key={movie._id} movie={movie} handleAddToCart={handleAddToCart} />
//       ))}
//     </div>
//   );
// }

// export default MovieList;

import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
