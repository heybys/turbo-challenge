import { MovieListResponse } from '@apis/movie/movie.ts';

export const getMovies = async (): Promise<MovieListResponse> => {
  return await fetch('/api/movies').then((value) => value.json());
};
