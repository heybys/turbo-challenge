import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import useHttpClient from '@apis/utils/useHttpClient.ts';
import { MovieListResponse } from '@apis/movie/model/movie.ts';

const useFetchMovies = () => {
  const { httpClient } = useHttpClient();

  const fetch = async (): Promise<AxiosResponse<MovieListResponse>> => {
    return await httpClient.get('/movies');
  };

  return useQuery({
    queryKey: ['movies'],
    queryFn: fetch,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    select: (response) => response.data,
  });
};

export default useFetchMovies;
