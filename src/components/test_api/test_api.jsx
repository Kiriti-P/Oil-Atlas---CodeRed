const axios = require('axios');
const eiaKey = process.env.EIA_KEY;

// axios.get("http://api.eia.gov/series/?api_key=${eiaKey}&series_id=PET.EMM_EPMRU_PTE_NUS_DPG.W")
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((error) => {
//     console.log(error)
//   });


const getUser = async () => {
    const getResponse = await axios
      .get(`http://api.eia.gov/series/?api_key=${eiaKey}&series_id=PET.EMM_EPMRU_PTE_NUS_DPG.W`)
      .then((response) => response)
      .catch((err) => console.log(err));
    return getResponse;

  };

  export default getUser