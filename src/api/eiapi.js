// connect to EIA API
// https://www.eia.gov/opendata/qb.php?category=2122627&sdid=SEDS.TETCB.A
// https://www.eia.gov/opendata/qb.php?category=2122627&sdid=SEDS.TETCB.A&api_key=YOUR_API_KEY_HERE


import axios from 'axios';
import { API_KEY } from './config';

const API_KEY = 'YOUR_API_KEY_HERE';

const api = axios.create({
  baseURL: 'https://api.eia.gov/series/',
  params: {
    api_key: API_KEY,
    data: 'json',

  },
});

// get petroleum production data from EIA API

export const getPetroleumProduction = () => api.get('SEDS.TETCB.A');


export default api;