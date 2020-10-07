import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Header from '../../components/header';
import MyProjects from './my-projects';
import InvalidBrowserMessage from '../../components/invalid-broswer/invalid-browser-message';
import { isInvalidBrowser } from '../../lib/isInvalidBrowser';

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Content margin={`${isInvalidBrowser ? 20 : 32}px auto`}>
        {isInvalidBrowser && (
          <InvalidBrowserMessage />
        )}
        <MyProjects />
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled(Layout.Content)<{ margin: string }>`
  box-sizing: content-box;
  padding: 0 20px;
  max-width: 1148px;
  margin: ${({ margin }) => margin};
`;

export default Dashboard;
