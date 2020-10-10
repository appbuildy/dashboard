import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Iframe from 'react-iframe';
import InvalidBrowserModal from '../../components/invalid-broswer/invalid-browser-modal';
import { isInvalidBrowser } from '../../lib/isInvalidBrowser';

interface IPlatform {
  match: {
    params: {
      id: string;
    }
  }
}

const Platform: React.FC<IPlatform> = ({ match: { params} }) => {
  const { id } = params;
  const jwt = localStorage.getItem('jwt');

  return (
    <>
      <IframeStyled
        url={`https://www.appbuildy.com/projects/${id}/?project_id=${id}&jwt=${jwt}`}
      />
      {isInvalidBrowser && (
        <InvalidBrowserModal />
      )}
    </>
  );
};

export default Platform;


const IframeStyled = styled(Iframe)`
    border: none;
    width: 100%;
    height: 100vh;
`;
