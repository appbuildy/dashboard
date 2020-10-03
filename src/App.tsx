import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Routes from './features/routes';
import { initializeAxios } from './features/lib/axios';
import { connect } from 'react-redux';
import * as applicationActions from './application/actions';

interface IApp {
  me: () => void,
}

function App(props: IApp) {
  const { me } = props;

  initializeAxios();

  useEffect(() => {
    me();
  }, [me]);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>AppBuildy</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Routes />
    </div>
  );
}

const mapDispatchToProps = {
  me: applicationActions.me,
}

export default connect(null, mapDispatchToProps)(App);
