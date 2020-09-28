import axios from 'axios';

export interface ILoginResponse {
  jwt: string;
}

interface IUser {
  email: string;
  password: string;
}

export const login = (user: IUser): Promise<ILoginResponse> => {
  return axios.post('/login', { user }).then((x: any) => x.data);
};
