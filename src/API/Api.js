import axios from "axios";

const baseURL = axios.create({
  baseURL: 'http://localhost:5000/api/v1/rrcollege', // Your root API URL
  timeout: 5000,                         
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});


export default baseURL;