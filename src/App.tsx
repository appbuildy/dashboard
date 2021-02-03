import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Routes from './features/routes';
import { initializeAxios } from './features/lib/axios';
import { useDispatch, useSelector } from 'react-redux';
import mixpanel from 'mixpanel-browser';
import { me } from './redux/application/actions';
import { RootState } from './redux/store';

function App() {
  initializeAxios();

  mixpanel.init('92099c241c5cd779ea91d8aaeddecb9d');

  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.application.user.id);
  const email = useSelector((state: RootState) => state.application.user.email);
  const projects = useSelector((state: RootState) => state.dashboard.projects);
  const createdAt = useSelector(
    (state: RootState) => state.application.user.created_at,
  );

  useEffect(() => {
    // dispatch(me());
  }, [dispatch]);

  useEffect(() => {
    if (id && id !== 0) {
      mixpanel.identify(id.toString());
    }
  }, [id]);

  useEffect(() => {
    if (email !== null) {
      mixpanel.people.set({
        $email: email, // only reserved properties need the $
        'Sign up date': createdAt, // Send dates in ISO timestamp format (e.g. "2020-01-02T21:07:03Z")
        'Projects amount': projects?.length,
        USER_ID: email, // use human-readable names
      });
    }
  }, [email, createdAt, projects.length]);

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
