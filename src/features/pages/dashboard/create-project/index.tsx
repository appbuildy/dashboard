import React, { useState } from 'react';
import { Input, Button } from '../../../../ui';
import { CreateAppPlaceholder2Svg } from '../../../../assets/dashboard';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Modal } from 'antd';

import {
  ModalWrapper,
  ModalActiveZone,
  ModalTitle,
  ModalSubtitle,
  ModalInfoZone,
} from '../../../../ui/modal-default-styles';
import { createProject } from './actions';
import ModalCloseButton from '../../../../ui/modal-close-button';
import CreateProjectCard from '../my-projects/create-project-card';
import axios from 'axios';

const StyledActiveZone = styled(ModalActiveZone)`
  padding: 30px 40px;
`;

const StyledInfoZone = styled(ModalInfoZone)`
  max-width: 350px;
  padding: 50px 0 50px 50px;
`;

const StyledSubtitle = styled(ModalSubtitle)`
  margin-bottom: 40px;
`;

interface IName {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const CreateProject = () => {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  const handleCreate = () => {
    setIsLoading(true);

    createProject({ name: name ? name.trim() : 'My App' })
      .then(response => {
        history.push(`/platform/${response.id}`);
      })
      .catch(() => {
        setIsLoading(false);
        alert('An error occurred, try to do it later');
      });
  };

  const closeModal = () => {
    setIsOpen(false);
    setName('');
  };

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
        width={800}
      >
        <ModalWrapper>
          <StyledActiveZone>
            <div>
              <ModalTitle>Create App</ModalTitle>
              <StyledSubtitle>
                No worries, you can name or change it later in case it’s still
                under question.
              </StyledSubtitle>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name of the App"
              />
            </div>
            <Button loading={isLoading} onClick={handleCreate}>
              Continue
            </Button>
          </StyledActiveZone>
          <StyledInfoZone>
            <img src={CreateAppPlaceholder2Svg} alt="shape" />
          </StyledInfoZone>
        </ModalWrapper>
        <ModalCloseButton closeModal={closeModal} />
      </Modal>

      <CreateProjectCard onClick={() => setIsOpen(true)} />
    </>
  );
};

export default CreateProject;
