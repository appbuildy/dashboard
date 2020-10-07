import React from 'react';
import styled from 'styled-components';
import { ChromeSvg } from '../../../assets/dashboard';
import { DownloadButton } from './common';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 68px;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-bottom: 20px;
`;

const ChromeIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 16px;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 26px;
  font-weight: 600;
`

const Description = styled.div`
  display: flex;
`;

const InvalidBrowserMessage: React.FC = () => {
  return (
    <>
      <Wrap>
        <Description>
          <ChromeIcon src={ChromeSvg} />
          <Text>
            Our builder works only in Chrome at the moment
          </Text>
        </Description>
        <DownloadButton href="https://www.google.com/chrome/?hl=ru" target="_blank">
          Download Chrome
        </DownloadButton>
      </Wrap>
    </>
  );
};

export default InvalidBrowserMessage;
