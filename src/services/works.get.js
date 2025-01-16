import axios from 'axios';
import { server } from '../api/server';

export const getWorks = async () => {
  const response = await axios.get(`${server}/api/works`);
  return response.data;
};
