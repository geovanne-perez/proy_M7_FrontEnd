import axios from "axios";
const URL_API = import.meta.env.URL_API;
const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN;
console.log(`URL API =${URL_API}`);
console.log(`VITE_API_TOKEN =${VITE_API_TOKEN}`);  


const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem(import.meta.env.VITE_API_TOKEN_KEY)}` }
};

const loginService = async data => {
  return axios.post(`${URL_API}/login`, data);
};

//get user by id
const getUserService = async () => {
    return axios.get(`${URL_API}/users/`, config);
};

//update user
const updateUserService = async data => {
    return axios.put(`${URL_API}/users/`, data, config);
};


