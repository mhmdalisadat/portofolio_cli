import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { server } from '../api/server';
import { domain } from '../api/domain';



const useProject = () => {
  return useQuery(['project', domain], getProject, {
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
export default useProject;
