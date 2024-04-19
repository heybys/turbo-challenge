import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import useFetchMovies from '@apis/movie/useFetchMovies.ts';
import { Movie } from '@apis/movie/model/movie.ts';

const StyledMoviePage = styled.div`
  font-size: 1rem;
  color: #333;
  padding: 1rem;
`;

const MoviePage = () => {
  const { data: movieListResponse } = useFetchMovies();
  const navigate = useNavigate();

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movies/${movie.movieCd}`, { state: { movie } });
  };

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
          {movieListResponse?.movieList?.map((movie) => (
            <tr key={movie.movieCd}>
              <td>{movie.movieCd}</td>
              <td>{movie.movieNm}</td>
              <td>{movie.companies.join(', ')}</td>
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
