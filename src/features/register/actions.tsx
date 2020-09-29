import axios from 'axios';

export interface IRegisterResponse {
  jwt: string;
}

interface IUser {
  email: string;
  password: string;
}

export const register = (user: IUser): Promise<IRegisterResponse> => {
  return axios.post('/signup', { user }).then((x: any) => x.data);
};
