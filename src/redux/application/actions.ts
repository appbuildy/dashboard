import { Dispatch } from 'redux';
import * as services from './services';
import { setUser } from './reducer';
import { IUser, IUserResponse } from './interfaces';

export const login = (user: IUser) => (dispatch: Dispatch): Promise<any> => (
 new Promise((resolve, reject) => {
    services
      .login(user)
      .then((response: IUserResponse) => {
        const { jwt, ...rest } = response;

        localStorage.setItem('jwt', jwt);
        dispatch(setUser(rest));

        resolve();
      })
      .catch((error) => {
        reject(error)
      })
  })
);

export const register = (user: IUser) => (dispatch: Dispatch): Promise<any> => (
  new Promise((resolve, reject) => {
    services
      .register(user)
      .then((response: IUserResponse) => {
        const { jwt, ...rest } = response;

        localStorage.setItem('jwt', jwt);
        dispatch(setUser(rest));

        resolve();
      })
      .catch((error) => {
        reject(error)
      })
  })
);

export const me = () => (dispatch: Dispatch) => {
  services
    .me()
    .then((response: IUserResponse) =>  dispatch(setUser(response)));
}
