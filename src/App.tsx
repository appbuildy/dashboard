import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Routes from './features/routes';
import { initializeAxios } from './features/lib/axios';
import { useDispatch } from 'react-redux';
import { me } from './redux/application/actions';

function App() {

  initializeAxios();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

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

export default App;
