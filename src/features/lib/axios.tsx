import axios from 'axios';

export const initializeAxios = () => {
  axios.defaults.baseURL = 'https://www.appbuildy.com';
  axios.defaults.headers.post['Content-Type'] =
    'application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
};

axios.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('jwt');
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
