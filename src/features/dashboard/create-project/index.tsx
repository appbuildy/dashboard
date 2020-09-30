import React, { useState } from 'react';
import styled from 'styled-components';
import { createProject } from './actions';
import Card from '../my-projects/card';
import './modal.css';
import { CloseSvg } from '../../../assets/dashboard';

import { Modal } from 'antd';
import Token from './token';
import Base from './base';
import Name from './name';

const STEP_NAME = 'STEP_NAME';
const STEP_TOKEN = 'STEP_TOKEN';
const STEP_BASE = 'STEP_BASE';

const CloseButton = styled.div`
  top: -13px;
  right: -13px;
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
 
  
  img {
    opacity: 0.4;
  }
`;

const CreateProject = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [step, setStep] = useState<string>(STEP_NAME);

  const [appName, setAppName] = useState<string>('');

  const [token, setToken] = useState<string>('');
  const [tokenError, setTokenError] = useState<string>('');

  const [base, setBase] = useState<string>('');
  const [baseError, setBaseError] = useState<string>('');

  const isTokenValid = () => {
    setTokenError('');
    const pureToken = token.trim();

    if (pureToken === '') {
      setTokenError('API Key should not be empty');

      return false;
    } else if (!pureToken.startsWith('key')) {
      setTokenError('API Key should start with key');

      return false;
    }

    return true;
  }

  const isBaseValid = () => {
    setBaseError('');
    const pureBase = base.trim();

    if (pureBase === '') {
      setBaseError('Base link should not be empty');

      return false;
    }

    return true;
  }


  const onStepDone = () => {
    switch (step) {
      case STEP_NAME: {
        setStep(STEP_TOKEN);
        break;
      }
      case STEP_TOKEN: {
        if (isTokenValid()) {
          setStep(STEP_BASE);
        }

        break;
      }
      case STEP_BASE: {
        if (isBaseValid()) {
          const newProject = {
            name: appName.trim() || 'My App',
            airtable_credentials: {
              api_key: token,
              base: base,
            },
          };

          createProject(newProject)
            .then(x => {
              setIsOpen(false);
            });
        }

        break;
      }
    }
  };

  const renderStep = () => {
    switch (step) {
      case STEP_NAME:
        return (
          <Name
            value={appName}
            onChange={setAppName}
            onSubmit={onStepDone}
          />
        );
      case STEP_TOKEN:
        return (
          <Token
            value={token}
            error={tokenError}
            onChange={setToken}
            onSubmit={onStepDone}
          />
        );
      case STEP_BASE:
        return (
          <Base
            value={base}
            error={baseError}
            onChange={setBase}
            onSubmit={onStepDone}
          />
        );
    }

  };

  return (
    <>
      <Modal
        visible={isOpen}
        bodyStyle={{ padding: 0 }}
        onOk={() => setIsOpen(false)}
        onCancel={() => {
          setIsOpen(false);
          setAppName('');
          setStep(STEP_NAME);
          setToken('');
        }}
        title={null}
        footer={null}
        closable={false}
        width={step === STEP_NAME ? 800 : 1000}
      >
        {renderStep()}
        <CloseButton onClick={() => setIsOpen(false)}>
          <img src={CloseSvg} alt="" />
        </CloseButton>
      </Modal>

      <Card onClick={() => setIsOpen(true)}> create</Card>
    </>
  );
};

export default CreateProject;
