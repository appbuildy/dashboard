import React from 'react';
import { CloseSvg } from '../assets/dashboard';
import styled from 'styled-components';
const CloseButton = styled.div`
  top: -13px;
  right: -13px;
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    transition: all 0.2s ease-in-out;
  }

  :hover {
    img {
      opacity: 0.7;
    }
  }
`;

const ModalCloseButton: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <CloseButton onClick={closeModal}>
      <img src={CloseSvg} alt="" />
    </CloseButton>
  )
}

export default ModalCloseButton;
