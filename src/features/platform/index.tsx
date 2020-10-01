import React from 'react';
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
    <Iframe
      url="https://www.appbuildy.com/web/index.html"
      width={`${window.innerWidth}px`}
      height={`${window.innerHeight}px`}
    />
  );
};

export default Platform;
