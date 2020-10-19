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
      {isLoading && <Loader alt="loading" src={loading} />}
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

const Loader = styled.img`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  width: 150px;
  height: 150px;
`;
