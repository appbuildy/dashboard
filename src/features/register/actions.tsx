import axios from 'axios';

interface IUser {
  email: string;
  password: string;
}

export const register = (user: IUser) => {
  return axios.post('/signup', { user }).then((x: any) => x.data);
};
