import React from 'react';
import { Helmet } from 'react-helmet';

const Chaport = () => {
  return (
    <Helmet
      script={[
        {
          type: 'text/javascript',
          innerHTML: `(function(w,d,v3){
            w.chaportConfig = {
              appId : '5f6ceb5396c6b40369121e0f'
            };
      
            if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)})(window, document);`,
        },
      ]}
    />
  );
};

export default Chaport;
