import React from 'react';
import { Input as AntInput } from 'antd';
import styled, { css } from 'styled-components';

interface IInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  size?: string;
  placeholder: string;
}

const StyledInput = styled(({ isBig, ...rest }) => <AntInput {...rest} />)<{ isBig: boolean }>`    
    border-radius: ${({ isBig }) => (isBig ? '14px' : '6px' )};
    height: ${({ isBig }) => (isBig ? '56px' : '36px' )};
    ${({ isBig }) => isBig && css`
      font-size: 20px;
      padding: 0 25px;
    `}
    
    :focus,
    :hover {
      border-color: #007aff;
      border-right-width: 1px !important;
      box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.2);
    }    
`;

const Input = (props: IInputProps) => {
  return <StyledInput isBig={props.size === 'big'} {...props} />;
};

export default Input;
