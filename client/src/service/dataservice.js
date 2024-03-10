import axios from "axios";

const BASE_URL = 'http://localhost:3000';

const DataService = {
    getProducts: async (url) => {
      try {
        const response = await axios.get(`${BASE_URL}${url}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
    getProductsbyId: async (url) => {
      try {
        const response = await axios.get(`${BASE_URL}${url}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
    saveContactInfo: async (url, req) => {
      try {
        const response = await axios.post(`${BASE_URL}${url}`, req);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  };
  
  export default DataService;