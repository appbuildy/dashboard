import React from 'react';
import { Input as AntInput } from 'antd';
import './input.css';

const Input = (props: any) => {
  const style =
    props.size === 'big'
      ? { height: 56, fontSize: 20, borderRadius: 14, padding: '0 25px' }
      : {};
  return <AntInput style={style} {...props} />;
};

export default Input;
