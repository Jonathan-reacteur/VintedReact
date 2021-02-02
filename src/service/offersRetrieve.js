import axios from "axios";

require("dotenv").config();
const offersRetrieve = async () => {
  const response = await axios
    .get(process.env.REACT_APP_API_VINTED)
    .catch((error) => {
      //       // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.

      console.log(error);
    });

  return response;
};

const fetchDatas = async (functDataSet, funcFlagLoaded) => {
  const response = await offersRetrieve();

  functDataSet(response.data);
  funcFlagLoaded(true);
};

export default { offersRetrieve, fetchDatas };
