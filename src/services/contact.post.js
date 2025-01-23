import axios from 'axios';
import { server } from '../api/server';

export const contactPost = async (data) => {
  const response = await axios.post(`${server}/api/send-contact`, data);
  return response.data;
};
