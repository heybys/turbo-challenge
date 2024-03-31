import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export interface Movie {
  movieCd: string;
  movieNm: string;
  directors: string[];
  companys: string[];
}

export interface MovieListResponse {
  totCnt: number;
  movieList: Movie[];
}

const MoviePage = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movies/${movie.movieCd}`, { state: { movie } });
  };

  useEffect(() => {
    fetch('api/movies')
      .then((value) => value.json())
      .then((response: MovieListResponse) => {
        setMovieList(response.movieList);
      });
  }, []);

  return (
    <div>
      <h1>This is my MoviePage</h1>
      <div>---</div>
      {movieList.map((movie) => (
        <div key={movie.movieCd} onClick={() => handleMovieClick(movie)}>
          {movie.movieCd} - {movie.movieNm}
        </div>
      ))}
      <div>---</div>
      <Outlet />
    </div>
  );
};

export default MoviePage;
