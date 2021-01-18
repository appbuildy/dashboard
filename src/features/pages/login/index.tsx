import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, PasswordInput, Button, Error } from '../../../ui';
import { Link, useHistory } from 'react-router-dom';
import { emailRegEx } from '../../lib/emailRegEx';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/application/actions';
import {
  bgSvg,
  logoSvg,
  facebookSvg,
  googleSvg,
} from '../../../assets/authorization';
import mixpanel from 'mixpanel-browser';

const Login = () => {
  const history = useHistory();
  const dispatch: any = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  // const handleGoogle = () => {
  //   window.open('https://www.appbuildy.com/auth/google_oauth2/');
  // };

  const handleFacebook = () => {
    window.open('https://www.appbuildy.com/auth/facebook');
  };

  const isValid = (): boolean => {
    const emailError = !emailRegEx.test(email) ? 'Incorrect e-mail format' : '';
    const passwordError = password.length < 6 ? 'Wrong e-mail or password' : '';

    setError(emailError || passwordError || '');

    return !emailError && !passwordError;
  };

  const handleCredentials = () => {
    setError('');

    if (isValid()) {
      const user = {
        email: email,
        password: password,
      };

      dispatch(login(user))
        .then(() => {
          mixpanel.track('log in');
          history.push('/dashboard');
        })
        .catch((e: any) => {
          setError('Wrong e-mail or password');
          mixpanel.track('log in', { error: e.message });
        });
    } else {
      mixpanel.track('log in', { invalid: true });
    }
  };

  return (
    <Wrapper>
      <Container>
        <Logo src={logoSvg} />
        <Form>
          <Title>Log In</Title>
          <ButtonContainer>
            {/*<Button size="big" type="light" onClick={handleGoogle}>*/}
            {/*  <ButtonAlign>*/}
            {/*    <Social>*/}
            {/*      <img alt="google icon" src={googleSvg} />*/}
            {/*    </Social>*/}
            {/*    Continue with Google*/}
            {/*    <CenterHelper />*/}
            {/*  </ButtonAlign>*/}
            {/*</Button>*/}
            {/*<SizedBox />*/}
            <Button size="big" onClick={handleFacebook}>
              <ButtonAlign>
                <Social>
                  <img alt="google icon" src={facebookSvg} />
                </Social>
                Log in with Facebook
                <CenterHelper />
              </ButtonAlign>
            </Button>
            <SizedBox />
            <SizedBox />
            {error.length > 0 && (
              <>
                <Error>{error}</Error>
                <SizedBox />
              </>
            )}
          </ButtonContainer>
          <Inputs>
            <Input
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              size="big"
              placeholder="E-mail"
            />
            <SizedBox />
            <PasswordInput
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              size="big"
              placeholder="Password"
            />
            <BigSizedBox />
            <Button onClick={handleCredentials} size={'big'}>
              Log In
            </Button>
          </Inputs>
          <Actions>
            <Link
              onClick={() => mixpanel.track('to signup link clicked')}
              to="/signup"
            >
              <ActionText>Don't have an account?</ActionText>
            </Link>
            {/*<Link to="">*/}
            {/*  <ActionText>Forgot Password?</ActionText>*/}
            {/*</Link>*/}
          </Actions>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  background-image: url('${bgSvg}');
  background-color: #fff;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 1148px;
  padding-left: 24px;
  padding-top: 30px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;

const SizedBox = styled.div`
  height: 15px;
`;

const BigSizedBox = styled.div`
  height: 20px;
`;

const Logo = styled.img``;

const Social = styled.div`
  width: 30px;
  height: 30px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const ButtonAlign = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const CenterHelper = styled.div`
  flex: 1;
`;

const Form = styled.div`
  padding: 40px 60px;
  border-radius: 25px;
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.1);
  background: #fff;
  display: inline-block;
  margin-top: 80px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Inputs = styled.div``;

const Actions = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

const ActionText = styled.div`
  font-size: 18px;
  opacity: 1;
  line-height: 22px;
  font-weight: 400;
  color: #0077f5;
  background: linear-gradient(to bottom, #00b1ff, #0077f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease-in-out;

  :hover {
    opacity: 0.7;
  }
`;
