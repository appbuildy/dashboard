import axios from 'axios';

export interface IProject {
  id: number;
  name: string,
  photo: string,
  updated_at: string;
}

export const getProjects = (): Promise<IProject[]> => {
  return axios.get('/api/projects').then((x: any) => x.data);
}
