import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { me } from '../../../redux/application/actions';

const Oauth = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (dispatch) {
      const urlParams = new URLSearchParams(window.location.search);
      const jwt = urlParams.get('jwt');
      if (jwt) {
        localStorage.setItem('jwt', jwt as string);
        dispatch(me());

        history.replace('/dashboard');
      }
    }
  }, [dispatch]);

  return <div></div>;
};

export default Oauth;
