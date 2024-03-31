import React from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h1>This is my MoviePage</h1>
      <div>---</div>
      <div>{movieId}</div>
    </div>
  );
};

export default MoviePage;
