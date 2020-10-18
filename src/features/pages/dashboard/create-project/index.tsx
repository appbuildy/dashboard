import React, { useState } from 'react';
import { createProject } from './actions';
import CreateProjectCard from '../my-projects/create-project-card';
import './modal.css';
import ModalCloseButton from '../../../../ui/modal-close-button';

import { Modal } from 'antd';
import Token from './token';
import Base from './base';
import Name from './name';

const STEP_NAME = 'STEP_NAME';
const STEP_TOKEN = 'STEP_TOKEN';
const STEP_BASE = 'STEP_BASE';

const CreateProject: React.FC<{ onCreated: (projectId: number) => void }> = ({ onCreated }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [step, setStep] = useState<string>(STEP_NAME);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

          setIsLoading(true);

          createProject(newProject)
            .then((project) => {
              setIsLoading(false);
              setIsOpen(false);
              onCreated(project.id);
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
            isLoading={isLoading}
            onChange={setBase}
            onSubmit={onStepDone}
          />
        );
    }

  };

  const closeModal = () => {
    setIsOpen(false);
    setAppName('');
    setStep(STEP_NAME);
    setToken('');
    setTokenError('');
    setBase('');
    setBaseError('');
  }

  return (
    <>
      <Modal
        visible={isOpen}
        bodyStyle={{ padding: 0, minHeight: 400 }}
        onOk={closeModal}
        onCancel={closeModal}
        title={null}
        footer={null}
        closable={false}
        width={step === STEP_NAME ? 800 : 1000}
      >
        {renderStep()}
        <ModalCloseButton closeModal={closeModal}/>
      </Modal>

      <CreateProjectCard onClick={() => setIsOpen(true)} />
    </>
  );
};

export default CreateProject;
