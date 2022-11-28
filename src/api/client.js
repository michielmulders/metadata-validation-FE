import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 10000, // high because of slow IPFS.io loading on backend side
    // headers: {'X-Custom-Header': 'foobar'}
});
  
export default client;