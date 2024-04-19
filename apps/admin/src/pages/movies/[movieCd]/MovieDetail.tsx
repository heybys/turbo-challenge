import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Movie } from '@apis/movie/model/movie.ts';

const MovieDetail = () => {
  const { movieCd } = useParams();
  const { state } = useLocation();

  const movie: Movie = state?.movie;

  if (!movie) return <div>영화 정보를 찾을 수 없습니다.</div>;

  return (
    <div>
      <div>movieCd : {movieCd}</div>
      <div>movieNm : {movie.movieNm}</div>
      <div>directors : {movie.directors.join(', ')}</div>
      <div>companies : {movie.companies.join(', ')}</div>
    </div>
  );
};

export default MovieDetail;
