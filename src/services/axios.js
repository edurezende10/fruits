import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'https://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json',
});

export default instanceAxios;
