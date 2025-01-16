import { useQuery } from '@tanstack/react-query';
import { getLanding } from '../services/landing.get';

const useLanding = () => {
  return useQuery({
    queryKey: ['landing'],
    queryFn: getLanding,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};

export default useLanding;
