import axios from 'axios';
import { BACKEND_API_URL } from '@env';

console.log('API URL:', BACKEND_API_URL);

const Api = axios.create({
  baseURL: BACKEND_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default Api;