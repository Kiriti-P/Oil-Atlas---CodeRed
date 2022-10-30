
require('dotenv').config();

const API_KEY = process.env.EIA_API_KEY;
 
// const app = require('express')();
const axios = require('axios');


// use .env apikey

// const PORT = process.env.PORT || 8080;

var Petrol = {
  method: 'get',
  url: `https://api.eia.gov/v2/petroleum/?api_key=${API_KEY}`,
  headers: { }
};

axios(Petrol)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});



