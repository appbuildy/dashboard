import axios from 'axios';
import { IProject } from './interfaces';

export const getProjects = (): Promise<IProject[]> => {
  return axios.get('/api/projects').then((x: any) => x.data);
}
