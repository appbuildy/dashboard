import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/button';
import bgSvg from './bg.svg';
import logoSvg from './logo-full.svg';
import facebook from './facebook.svg';
import google from './google.svg';
import Input from '../../ui/input';

const Login = () => {
  const handleGoogle = () => {
    alert('google');
  };
  const handleFacebook = () => {
    alert('face');
  };

  const handleCredentials = () => {
    alert('password and login');
  };

  return (
    <Wrapper>
      <Container>
        <Logo src={logoSvg} />
        <Form>
          <Title>Log In</Title>
          <ButtonContainer>
            <Button size="big" type="light" onClick={handleGoogle}>
              <ButtonAlign>
                <Social>
                  <img alt="google icon" src={google} />
                </Social>
                Continue with Google
                <CenterHelper />
              </ButtonAlign>
            </Button>
            <SizedBox />
            <Button size="big" onClick={handleFacebook}>
              <ButtonAlign>
                <Social>
                  <img alt="google icon" src={facebook} />
                </Social>
                Continue with Facebook
                <CenterHelper />
              </ButtonAlign>
            </Button>
          </ButtonContainer>
          <Inputs>
            <Input size="big" placeholder="E-mail" />
            <SizedBox />
            <Input size="big" placeholder="Password" />
            <BigSizedBox />
            <Button onClick={handleCredentials} size={'big'}>
              Continue
            </Button>
          </Inputs>
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
  padding: 40px 60px 60px 60px;
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

const Inputs = styled.div`
  margin-top: 30px;
`;
