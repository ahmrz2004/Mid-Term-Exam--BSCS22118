import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieItem;
