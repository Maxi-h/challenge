// Vendors
import client from '../cli/cli';

// Queries
import {GET_COUNTRIES} from '../graphql/queries';

// Interfaces & Const
// import {Contry} from '../interfaces/Country';

const useCountries = () => {
  // Read
  const getCountries = async () => {
    const {loading, error, data} = await client.query({
      query: GET_COUNTRIES,
    });
    return {data, loading, error};
  };

  //   const {loading, error, data} = getCountries();

  return {
    getCountries,
  };
};

export default useCountries;
