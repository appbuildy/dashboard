import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Layout } from 'antd';
import logo from '../../assets/header/logo.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const { Header: AntHeader } = Layout;

const Header = () => {
  const history = useHistory();

  const email = useSelector((state: RootState) => state.application.user.email)

  return (
    <AntHeader style={{ background: '#fff' }}>
      <Container>
        <LogoContainer>
          <Logo src={logo} />
          <ItemList>
            <NavLinkItem to="/dashboard">Apps</NavLinkItem>
            {/*<NavLinkItem to="/templates">Templates</NavLinkItem>*/}
            {/*<NavLinkItem to="/billing">Billing</NavLinkItem>*/}
            {/*<NavLinkItem to="/help">Help</NavLinkItem>*/}
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
  max-width: 1148px;
  margin: auto;
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

const NavLinkItem = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 13px;
  height: 36px;
  color: #000;
  border-radius: 7px;
  transition: all 0.2s ease-in-out;
  
  &.active {
    color: #007aff;
    background-image: linear-gradient(to bottom, rgba(97, 228, 255, 0.3), rgba(0, 160, 255, 0.35));
  }
`;
