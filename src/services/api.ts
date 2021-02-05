import axios from 'axios';

const api = axios.create({ baseURL: 'http://172.23.182.34:3333' });

export default api;
