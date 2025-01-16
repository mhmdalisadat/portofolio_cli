import { useQuery } from '@tanstack/react-query';
import { getWorks } from '../services/works.get';

const useWorks = () => {
  return useQuery({
    queryKey: ['works'],
    queryFn: getWorks,
  });
};

export default useWorks;
