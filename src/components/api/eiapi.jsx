import axios from 'axios';
import { eiaKey } from '../../../.env';

// To use an API key, we place it as a parameter after the route.

// https://api.eia.gov/API_route?api_key=xxxxxxx

const axios = require('axios');
const eiaKey = process.env.EIAAPIKEY;

// request all petroleum products data
const getPetroleumProducts = async () => {
    const url = `http://api.eia.gov/series/?api_key=${eiaKey}&series_id=PET.EMM_EPMRU_PTE_NUS_DPG.W`;
    const response = await axios.get(url);
    return response.data;
};

// requesll all USA petroleum products data
const getUSAPetroleumProducts = async () => {
    const url = `http://api.eia.gov/series/?api_key=${eiaKey}&series_id=PET.EMM_EPMRU_PTE_NUS_DPG.W&region=USA`;
    const response = await axios.get(url);
    return response.data;
};

// request all USA petroleum production data
const getUSAPetroleumProduction = async () => {
    const url = `http://api.eia.gov/series/?api_key=${eiaKey}&series_id=PET.WCRFPUS2.W`;
    const response = await axios.get(url);
    return response.data;
};

// request all USA petroleum consumption data
const getUSAPetroleumConsumption = async () => {
    const url = `http://api.eia.gov/series/?api_key=${eiaKey}&series_id=PET.WCRFPUS2.W`;
    const response = await axios.get(url);
    return response.data;
};


const eiaApi = axios.create({
    baseURL: 'http://api.eia.gov/series/',
    params: {
        api_key: eiaKey,
        out: 'json'
    }

});

module.exports = eiaApi;