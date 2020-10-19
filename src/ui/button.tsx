import React from 'react';
import { Button as AntButton } from 'antd';
import './button.css';

interface ButtonProps {
  type?: 'border' | 'general' | 'light';
  size?: 'big' | 'normal';
  loading?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = 'general',
  size = 'normal',
  loading = false,
  children,
  onClick,
}) => {
  if (type === 'border') {
    return (
      <AntButton
        onClick={onClick}
        loading={loading}
        className="custom-button custom-button--border"
      >
        {children}
      </AntButton>
    );
  }
  return (
    <AntButton
      onClick={onClick}
      loading={loading}
      className={`custom-button custom-button--${type} custom-button--${size}`}
    >
      {children}
    </AntButton>
  );
};

export default Button;
