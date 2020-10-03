import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import CreateProject from '../create-project';
import ProjectCard from './project-card';
import * as dashboardActions from '../../../dashboard/actions';
import { connect } from 'react-redux';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { IProject } from '../../../dashboard/interfaces';

TimeAgo.addLocale(en)

interface IMyProjects {
  getProjects: () => void;
  projects: IProject[];
}

const MyProjects = (props: IMyProjects) => {
  const { getProjects, projects } = props;

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  const history = useHistory();

  const timeAgo = new TimeAgo('en-Us');

  return (
    <Container>
      <CreateProject />
      {projects.map((project: IProject) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          photo={project.photo}
          updatedAt={timeAgo.format(new Date(project.updated_at))}
          onClick={() => history.push(`/platform/${project.id}`)}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  projects: state.dashboard.projects,
  state: state,
});

const mapDispatchToProps = {
  getProjects: dashboardActions.getProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);

const Container = styled.div`
  margin: auto;
  max-width: 1148px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
`;

