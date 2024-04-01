import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getMovies } from '@apis/movie/movieService.ts';
import { Movie } from '@apis/movie/movie.ts';

const MoviePage = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movies/${movie.movieCd}`, { state: { movie } });
  };

  const fetchMovieList = async () => {
    const response = await getMovies();
    setMovieList(response.movieList);
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <div>
      <div className={'nav'}>
        <Link className={'link'} to={'/'}>
          Back
        </Link>
      </div>
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
