import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, PasswordInput, Button, Error } from '../../ui';
import { useHistory, Link } from 'react-router-dom';
import { emailRegEx } from '../lib/emailRegEx';
import { register } from './actions';
import {
  bgSvg,
  logoSvg,
  facebookSvg,
  googleSvg,
} from '../../assets/authorization';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogle = () => {
    alert('google');
  };
  const handleFacebook = () => {
    alert('face');
  };

  const isValid = (): boolean => {
    const emailError = !emailRegEx.test(email) ? 'Incorrect e-mail format' : '';
    const passwordError =
      password.length < 6 ? 'Minimum password length is 6' : '';
    const secondPasswordError =
      password !== secondPassword ? 'Passwords must be the same' : '';

    setError(emailError || passwordError || secondPasswordError || '');

    return !emailError && !passwordError && !secondPasswordError;
  };

  const handleCredentials = () => {
    setError('');

    if (isValid()) {
      const user = {
        email: email,
        password: password,
      };

      register(user)
        .then(() => history.push('/login'))
        .catch(() => {
          setError('This email already exist');
        });
    }
  };

  const history = useHistory();

  return (
    <Wrapper>
      <Container>
        <Logo src={logoSvg} />
        <Form onSubmit={handleCredentials}>
          <Title>Sign Up</Title>
          <ButtonContainer>
            <Button size="big" type="light" onClick={handleGoogle}>
              <ButtonAlign>
                <Social>
                  <img alt="google icon" src={googleSvg} />
                </Social>
                Continue with Google
                <CenterHelper />
              </ButtonAlign>
            </Button>
            <SizedBox />
            <Button size="big" onClick={handleFacebook}>
              <ButtonAlign>
                <Social>
                  <img alt="google icon" src={facebookSvg} />
                </Social>
                Continue with Facebook
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
            <SizedBox />
            <PasswordInput
              value={secondPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSecondPassword(e.target.value)
              }
              size="big"
              placeholder="Password Again"
            />
            <BigSizedBox />
            <Button onClick={handleCredentials} size={'big'}>
              Continue
            </Button>
          </Inputs>
          <Actions>
            <Link to="/login">
              <ActionText>Already have an account?</ActionText>
            </Link>
          </Actions>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Register;

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

const Form = styled.form`
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
  opacity: 0.4;
  line-height: 22px;
  color: #000;
  transition: all 0.2s ease-in-out;

  :hover {
    opacity: 0.2;
  }
`;
