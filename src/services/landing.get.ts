import axios from 'axios';
import { server } from '../api/server';

export const getLanding = async () => {
  const response = await axios.get(`${server}/api/landing/`);
  return response.data;
};
