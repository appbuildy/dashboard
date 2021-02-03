import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import loading from '../platform/loading.gif';
import InvalidBrowserModal from '../../components/invalid-broswer/invalid-browser-modal';
import { isInvalidBrowser } from '../../lib/isInvalidBrowser';
import { useBlockScroll } from '../../lib/useBlockScroll';

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
  const [projectId, setProjectId] = useState<string | null>();

  useBlockScroll();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setProjectId(urlParams.get('project_id'));
  }, []);

  return (
    <>
      {isLoading && (
        <LoaderContainer>
          <LoaderFuckingContainer>
            <Loader alt="loading" src={loading} />
            <LoaderTitle>Loading...</LoaderTitle>
          </LoaderFuckingContainer>
        </LoaderContainer>
      )}
      {projectId && (
        <IframeStyled
          src={`https://www.appbuildy.com/projects/${id}?preview_mode=enabled&project_id=${projectId}`}
          // @ts-ignore
          onLoad={() => setIsLoading(false)}
        />
      )}
      {isInvalidBrowser && <InvalidBrowserModal />}
    </>
  );
};

export default Platform;

const IframeStyled = styled.iframe`
  border: none;
  width: 375px;
  height: 850px;
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
