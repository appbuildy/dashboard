import React, { useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import loading from './loading.gif';
import InvalidBrowserModal from '../../components/invalid-broswer/invalid-browser-modal';
import { isInvalidBrowser } from '../../lib/isInvalidBrowser';

interface IPlatform {
  match: {
    params: {
      id: string;
    };
  };
}

const Platform: React.FC<IPlatform> = ({ match: { params } }) => {
  const { id } = params;
  const [isLoading, setIsLoading] = useState(true);
  const jwt = localStorage.getItem('jwt');

  return (
    <>
      {isLoading && (
        <LoaderContainer>
          <LoaderFuckingContainer>
            <Loader alt="loading" src={loading} />
            <LoaderTitle>Loading the Project...</LoaderTitle>
          </LoaderFuckingContainer>
        </LoaderContainer>
      )}
      <IframeStyled
        src={`https://www.appbuildy.com/projects/${id}/?project_id=${id}&jwt=${jwt}`}
        // @ts-ignore
        onLoad={() => setIsLoading(false)}
      />
      {isInvalidBrowser && <InvalidBrowserModal />}
    </>
  );
};

export default Platform;

const IframeStyled = styled.iframe`
  border: none;
  width: 100%;
  height: 100vh;
`;

const LoaderContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const LoaderFuckingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.img`
  text-align: center;
  width: 150px;
  height: 150px;
`;

const LoaderTitle = styled.div`
  margin-top: 20px;
  font-size: 34px;
  font-weight: bold;
`;
