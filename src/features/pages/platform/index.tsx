import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Iframe from 'react-iframe';
import InvalidBrowserModal from '../../components/invalid-broswer/invalid-browser-modal';
import { isInvalidBrowser } from '../../lib/isInvalidBrowser';

// interface IPlatform {
//   match: {
//     params: {
//       id: string;
//     }
//   }
// }

const Platform = (/*props: IPlatform*/) => {
  // const { id } = props.match.params;
  // const isInvalidBrowser = true //navigator.userAgent.indexOf("Chrome") === -1;

  return (
    <>
      <IframeStyled
        url="https://www.appbuildy.com/web/index.html"
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
