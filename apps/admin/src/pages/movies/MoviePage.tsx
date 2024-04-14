import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getMovies } from '@apis/movie/movieService.ts';
import { Movie } from '@apis/movie/movie.ts';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';

const StyledMoviePage = styled.div`
  font-size: 1rem;
  color: #333;
  padding: 1rem;
`;

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
    <StyledMoviePage>
      <h3>Movies</h3>
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
    </StyledMoviePage>
  );
};

export default MoviePage;
