// src/services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'b45a3cb75432bb56c87a291d61678d3a',
  },
});

export default instance;
