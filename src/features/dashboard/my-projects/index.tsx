import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import CreateProject from '../create-project';
import Card from '../my-projects/card';
import { getProjects, IProject } from '../actions';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addLocale(en)

const things = [
  {
    name: 'KekLolOrbidol',
    id: 228,
    photo: "https://previews.123rf.com/images/fotojagodka/fotojagodka2006/fotojagodka200600028/150450124-happy-cat-breed-scottish-fold-over-a-white-banner.jpg",
    updated_at: "2020-10-01T05:03:27.745Z",
  },{
    name: 'pekmemememememekekekmeekemekekekeemke',
    id: 322,
    photo: "https://previews.123rf.com/images/fotojagodka/fotojagodka2006/fotojagodka200600028/150450124-happy-cat-breed-scottish-fold-over-a-white-banner.jpg",
    updated_at: "2020-10-01T05:03:27.745Z",
  },{
    name: 'Grek with olek',
    id: 7514,
    photo: "https://previews.123rf.com/images/fotojagodka/fotojagodka2006/fotojagodka200600028/150450124-happy-cat-breed-scottish-fold-over-a-white-banner.jpg",
    updated_at: "2020-10-01T05:03:27.745Z",
  },{
    name: 'Hum',
    id: 241412,
    photo: "https://previews.123rf.com/images/fotojagodka/fotojagodka2006/fotojagodka200600028/150450124-happy-cat-breed-scottish-fold-over-a-white-banner.jpg",
    updated_at: "2020-10-01T05:03:27.745Z",
  },{
    name: 'Witch is Bitch',
    id: 51512,
    photo: "https://previews.123rf.com/images/fotojagodka/fotojagodka2006/fotojagodka200600028/150450124-happy-cat-breed-scottish-fold-over-a-white-banner.jpg",
    updated_at: "2020-10-01T05:03:27.745Z",
  },
]

const MyProjects = () => {
  const [/*projects*/, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    getProjects()
      .then((projects: IProject[]) => setProjects(projects));
  }, []);

  const history = useHistory();

  const timeAgo = new TimeAgo('en-Us');

  return (
    <Container>
      <CreateProject />
      {things.map((project: IProject) => (
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

