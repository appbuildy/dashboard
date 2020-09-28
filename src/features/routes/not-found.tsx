import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Center>
      <Title>404</Title>
      <Caption>We couldn't find this page</Caption>
    </Center>
  );
};

export default NotFound;

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 56px;
  margin-bottom: 5px;
`;

const Caption = styled.div`
  font-size: 24px;
`;
