import axios from 'axios';
import { IUser, IUserResponse } from './interfaces';

export const login = (user: IUser): Promise<IUserResponse> => {
  return axios.post('/login', { user }).then((x: any) => x.data);
};

export const register = (user: IUser): Promise<IUserResponse> => {
  return axios.post('/signup', { user }).then((x: any) => x.data);
};

export const me = () => {
  return axios.get('/me').then((x: any) => x.data);
}
