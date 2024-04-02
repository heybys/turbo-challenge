import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getMovies } from '@apis/movie/movieService.ts';
import { Movie } from '@apis/movie/movie.ts';
import { Table } from 'react-bootstrap';
import styles from '@pages/mainPage.module.css';

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
    <div className={styles.page}>
      <h3>This is MovieList</h3>
      <Table striped bordered hover width={500}>
        <thead>
          <tr>
            <th>Movie Code</th>
            <th>Movie Name</th>
            <th>Company</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((movie) => (
            <tr key={movie.movieCd}>
              <td>{movie.movieCd}</td>
              <td>{movie.movieNm}</td>
              <td>{movie.companys.join(', ')}</td>
              <td>
                <button onClick={() => handleMovieClick(movie)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Outlet />
    </div>
  );
};

export default MoviePage;
