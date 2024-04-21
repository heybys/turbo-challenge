import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import useHttpClient from '@apis/utils/useHttpClient.ts';
import { Account } from '@apis/account/model/account.ts';

const useFetchAccounts = () => {
  const { httpClient } = useHttpClient();

  const fetch = async (): Promise<AxiosResponse<Account[]>> => {
    return await httpClient.get('/accounts');
  };

  return useQuery({
    queryKey: ['accounts'],
    queryFn: fetch,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    select: (response) => response.data,
  });
};

export default useFetchAccounts;
