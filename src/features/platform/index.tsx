import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Iframe from 'react-iframe';

// interface IPlatform {
//   match: {
//     params: {
//       id: string;
//     }
//   }
// }

const Platform = (/*props: IPlatform*/) => {
  // const { id } = props.match.params;

  return (
    <IframeStyled
      url="https://www.appbuildy.com/web/index.html"
    />
  );
};

export default Platform;


const IframeStyled = styled(Iframe)`
    border: none;
    width: 100%;
    height: 100vh;
`;
