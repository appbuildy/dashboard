import React from 'react';
import { Modal } from 'antd';
import { ChromeSvg } from '../../../assets/dashboard';
import styled from 'styled-components';
import {
  ModalActiveZone,
  ModalIllustration,
  ModalInfoZone,
  ModalSubtitle,
  ModalTitle,
  ModalWrapper,
} from '../../../ui/modal-default-styles';
import { DownloadButton } from './common';


const StyledModalWrapper = styled(ModalWrapper)`
  height: 378px;
`;

const StyledModalActiveZone = styled(ModalActiveZone)`
  width: 450px;
  padding: 30px 40px;
  
  ${ModalTitle} {
    font-weight: 600;
    padding: 0;
    margin-bottom: 20px;
    line-height: 46px;
  }
  
  ${ModalSubtitle} {
    font-weight: 500;
    padding: 0;
    margin-bottom: 50px;
    line-height: 22px;
  }
`;

const StyledModalInfoZone = styled(ModalInfoZone)`
  max-width: 350px;
  background-image: linear-gradient(to bottom, rgba(97, 255, 174, 0.3), rgba(28, 255, 0, 0.35));
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const StyledModalIllustration = styled(ModalIllustration)`
  width: 170px;
  height: 170px;
`;

const InvalidBrowserModal: React.FC = () => {
  return (
    <Modal
      visible={true}
      bodyStyle={{ padding: 0 }}
      title={null}
      footer={null}
      closable={false}
      width={800}
    >
      <StyledModalWrapper>
        <StyledModalActiveZone>
          <ModalTitle>Our Builder Works Only in Chrome at the Moment</ModalTitle>
          <ModalSubtitle>
            Please, open this page in Chrome for the best experience. We are still working hard to make it live in other browsers.
          </ModalSubtitle>
          <DownloadButton href="https://www.google.com/chrome/?hl=ru" target="_blank">
            Download Chrome
          </DownloadButton>
        </StyledModalActiveZone>
        <StyledModalInfoZone>
          <StyledModalIllustration alt="token gif" src={ChromeSvg} />
        </StyledModalInfoZone>
      </StyledModalWrapper>
    </Modal>
  )
}

export default InvalidBrowserModal;
