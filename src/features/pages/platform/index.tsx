import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
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

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.margin = '0';
      document.body.style.height = '100%';
      document.body.style.overflow = 'auto';
    };
  }, []);

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
      <LogoBack to={'/'} />
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

const LogoBack = styled(Link)`
  width: 80px;
  height: 60px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  left: 0;
  top: 0;
  background: red;
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
