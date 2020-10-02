import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import CreateProject from '../create-project';
import Card from '../my-projects/card';
import { getProjects, IProject } from '../actions';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addLocale(en)

const MyProjects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    getProjects()
      .then((projects: IProject[]) => setProjects(projects));
  }, []);

  const history = useHistory();

  const timeAgo = new TimeAgo('en-Us');

  return (
    <Container>
      <CreateProject />
      {projects.map((project: IProject) => (
        <Card
          key={project.id}
          id={project.id}
          name={project.name}
          photo={project.photo}
          updatedAt={timeAgo.format(new Date(project.updated_at))}
          onClick={() => history.push(`/platform/${project.id}`)}
        />
      ))}
    </Container>
  );
};

export default MyProjects;

const Container = styled.div`
  margin: auto;
  max-width: 1148px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
`;

