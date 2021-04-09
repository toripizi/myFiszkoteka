import axios from 'axios';

const instance = axios.create({
   baseURL: process.env.REACT_APP_DATABASE,
   params: {
      key: process.env.REACT_APP_AUTH_KEY
   }
});

export default instance;