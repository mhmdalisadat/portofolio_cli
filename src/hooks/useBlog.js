import { useQuery } from '@tanstack/react-query';
import { getBlog } from '../services/blog.get';

const useBlog = () => {
  return useQuery({
    queryKey: ['blogData'],
    queryFn: getBlog,
  });
};

export default useBlog;
