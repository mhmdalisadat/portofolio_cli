import axios from 'axios';
import { server } from '../api/server';

export const getBlog = async () => {
  const response = await axios.get(`${server}/api/blog/`);
  return response.data;
};
    