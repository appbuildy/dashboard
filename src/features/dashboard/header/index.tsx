import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Layout } from 'antd';
import logo from './logo.svg';
import { useSelector } from 'react-redux';

const { Header: AntHeader } = Layout;

const Header = () => {
  const history = useHistory();

  const email = useSelector((state: any) => state.application.user.email)

  return (
    <AntHeader style={{ background: '#fff' }}>
      <Container>
        <LogoContainer>
          <Logo src={logo} />
          <ItemList>
            <Item isActive>Apps</Item>
            <Item>Templates</Item>
            <Item>Billing</Item>
            <Item>Help</Item>
          </ItemList>
        </LogoContainer>
        <LoginInfo>{email}</LoginInfo>
        {/*заглушка*/}
        <ExitButton
          onClick={() => {
            localStorage.removeItem('jwt');
            history.push('/login');
          }}
        >
          exit
        </ExitButton>
      </Container>
    </AntHeader>
  );
};

export default Header;

// заглушка
const ExitButton = styled.div`
  box-sizing: border-box;
  text-align: center;
  background-color: #007aff;
  color: #fff;
  line-height: 12px;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LoginInfo = styled.div``;

const Logo = styled.img`
  margin-right: 20px;
`;

const ItemList = styled.div`
  display: flex;
`;

const Item = styled.div<{isActive?: boolean}>`
  margin-right: 20px;
  cursor: pointer;
  color: ${p => (p.isActive ? '#007aff' : '#000')};
`;
