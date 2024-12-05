import axios from 'axios';
export const todoApi = axios.create({
  baseURL: 'https://666867aff53957909ff7e50c.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});
