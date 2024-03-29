import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import CreateProject from '../create-project';
import ProjectCard from './project-card';
import * as dashboardActions from '../../../../redux/dashboard/actions';
import { useDispatch, useSelector } from 'react-redux';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { IProject } from '../../../../redux/dashboard/interfaces';
import { RootState } from '../../../../redux/store';
import mixpanel from 'mixpanel-browser';

TimeAgo.addLocale(en);

const MyProjects: React.FC = () => {
  const dispatch = useDispatch();

  const getProjects = () => {
    dispatch(dashboardActions.getProjects());
  };

  useEffect(getProjects, [dispatch]);

  const projects: IProject[] = useSelector(
    (state: RootState) => state.dashboard.projects,
  );

  const history = useHistory();

  const timeAgo = new TimeAgo('en-Us');

  return (
    <Container>
      <CreateProject />
      {projects
        .sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
        )
        .map(project => (
          <ProjectCard
            key={project.id}
            name={project.name}
            photo={project.photo}
            gradient={project.gradient}
            updatedAt={timeAgo.format(new Date(project.updated_at))}
            onClick={() => {
              mixpanel.track('project click', { 'project id': project.id });
              history.push(`/platform/${project.id}`);
            }}
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
  justify-items: center;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
`;
