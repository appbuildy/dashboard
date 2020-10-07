import React from 'react';
import { Input, Button } from '../../../../ui';
import tokenGif from './token.gif';
import styled from 'styled-components';

import {
  ModalWrapper,
  ModalActiveZone,
  ModalTitle,
  ModalSubtitle,
  ModalInfoZone,
  ModalIllustration,
  ModalError,
} from '../../../../ui/modal-default-styles';

interface IToken {
  value: string;
  error: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const AirtableRedirectButton = styled.a``;

const Token = (props: IToken) => {
  const {
    value,
    error,
    onChange,
    onSubmit,
  } = props;

  return (
    <ModalWrapper>
      <ModalActiveZone>
        <div>
          <ModalTitle>Add your API Key</ModalTitle>
          <ModalSubtitle>
            The API Key enables us to connect to your Airtable base <br />
            and link your Airtable data to this app.
          </ModalSubtitle>
          <div style={{ marginLeft: '-3px' }}>
            <Input
              value={value}
              onChange={e => onChange(e.target.value)}
              placeholder="Paste your API key here"
            />
          </div>
          <ModalError>{error}</ModalError>
        </div>
        <Button onClick={onSubmit}>Continue</Button>
      </ModalActiveZone>
      <ModalInfoZone>
        <span>You'll find the API Key in your</span>{' '}
        <AirtableRedirectButton target="_blank" href="https://airtable.com/account">
          Airtable Account page
        </AirtableRedirectButton>
        <ModalIllustration alt="token gif" src={tokenGif} />
        <Button
          onClick={() => window.open('https://airtable.com/account')}
          type="border"
        >
          Open Airtable Account
        </Button>
      </ModalInfoZone>
    </ModalWrapper>
  );
};

export default Token;
