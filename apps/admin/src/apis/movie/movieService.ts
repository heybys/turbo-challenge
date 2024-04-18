import { MovieListResponse } from '@apis/movie/movie.ts';
import httpClient from '@apis/utils/httpClient.ts';

class MovieService {
  getMovies = async (): Promise<MovieListResponse> => {
    return await httpClient.get('/movies').then((value) => value.data);
  };
}

const movieService = new MovieService();
export default movieService;
