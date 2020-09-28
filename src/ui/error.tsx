import React from 'react';
import styled from 'styled-components';

const Error = (props: any) => {
  return <Wrap>{props.children}</Wrap>;
};

export default Error;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff4141;
  color: #fff;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  height: 56px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 14px;
`;
