import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  type?: 'border' | 'general' | 'light';
  size?: 'big' | 'normal';
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = 'general',
  size = 'normal',
  children,
  onClick,
}) => {
  if (type === 'border') {
    return <WrapperBorder onClick={onClick}>{children}</WrapperBorder>;
  }
  return (
    <Wrapper size={size} type={type} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.div<{ type: string; size: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 16px;
  ${p =>
    p.type === 'light'
      ? css`
          background: linear-gradient(180deg, #eaf6ff 0%, #b3dfff 100%);
          color: #000;
        `
      : css`
          color: #fff;
          background-image: linear-gradient(to bottom, #00b1ff, #0077f5);
        `}
  ${p =>
    p.size === 'big'
      ? css`
          height: 56px;
          font-size: 20px;
          border-radius: 14px;
        `
      : css`
          height: 36px;
          border-radius: 6px;
        `}
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.85;
  }
`;

const WrapperBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #007aff;
  height: 36px;
  box-sizing: border-box;
  border-radius: 6px;
  border-style: solid;
  border-width: 2px;
  border-color: #007aff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.85;
  }
`;
