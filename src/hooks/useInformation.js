import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { server } from '../api/server';
import { domain } from '../api/domain';

const getInfo = async () => {
  const response = await axios.get(`${server}/api/information/?domain=${domain}`);
  return response.data;
};

const useInfo = () => {
  return useQuery(['info', domain], getInfo, {
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};

export default useInfo;
