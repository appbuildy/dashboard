import React from 'react';
import { Input, Button } from '../../../../ui';
import baseGif from './base.gif';

import {
  ModalWrapper,
  ModalActiveZone,
  ModalTitle,
  ModalSubtitle,
  ModalInfoZone,
  ModalIllustration,
  ModalError,
} from '../../../../ui/modal-default-styles';

interface IBase {
  value: string;
  error: string;
  isLoading: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const Base = (props: IBase) => {
  const {
    value,
    error,
    isLoading,
    onChange,
    onSubmit,
  } = props;

  return (
    <ModalWrapper>
      <ModalActiveZone>
        <div>
          <ModalTitle>Share a Link to your Base</ModalTitle>
          <ModalSubtitle>
            Choose the base that you use as a database for this app. <br />
            Paste a link to this base.
          </ModalSubtitle>
          <div style={{ marginLeft: '-3px' }}>
            <Input
              value={value}
              onChange={e => onChange(e.target.value)}
              placeholder="Paste the Link here"
            />
          </div>
          <ModalError>{error}</ModalError>
          {/*<Secured onClick={() => setIsProtected(s => !s)}>*/}
          {/*  My shared base is password protected*/}
          {/*</Secured>*/}
          {/*{isProtected && (*/}
          {/*  <Input*/}
          {/*    value={protectedPassword}*/}
          {/*    onChange={e => setProtectedPassword(e.target.value)}*/}
          {/*    placeholder="Your shared base password"*/}
          {/*  />*/}
          {/*)}*/}
        </div>
        <Button onClick={onSubmit} loading={isLoading}>Continue</Button>
      </ModalActiveZone>
      <ModalInfoZone>
        <span>
          You'll find this in the Share menu, which you can access <br />
          from the top right-hand corner of your Airtable base.
        </span>
        <ModalIllustration alt="token gif" src={baseGif} />
        <Button
          onClick={() => window.open('https://airtable.com')}
          type="border"
        >
          Open Airtable
        </Button>
      </ModalInfoZone>
    </ModalWrapper>
  );
};

export default Base;
