import axios from 'axios';

interface INewProject {
  name: string;
  airtable_credentials: {
    api_key: string;
    base: string;
  };
}

export const createProject = (newProject: INewProject) => {
  return axios.post('/api/projects', newProject).then((x: any) => x.data);
};
