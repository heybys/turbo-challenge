import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import useHttpClient from '@apis/utils/useHttpClient.ts';
import useQueryKey from '@apis/resource/key/useQueryKey.ts';

const useFetchImage = (imageName: string) => {
  const { httpClient } = useHttpClient();

  const fetch = async (): Promise<AxiosResponse> => {
    return await httpClient.get(`/images/${imageName}`);
  };

  return useQuery({
    queryKey: useQueryKey(imageName),
    queryFn: fetch,
    select: (response) => response.data,
  });
};

export default useFetchImage;
