import React from 'react';
import { Input, Button } from '../../../ui';
import tokenGif from './token.gif';

import {
  Wrapper,
  ActiveZone,
  Title,
  SubTitle,
  InfoZone,
  GifContainer,
  Error,
} from './styles';

interface IToken {
  value: string;
  error: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const Token = (props: IToken) => {
  const {
    value,
    error,
    onChange,
    onSubmit,
  } = props;

  return (
    <Wrapper>
      <ActiveZone>
        <div>
          <Title>Add your API Key</Title>
          <SubTitle>
            The API Key enables us to connect to your Airtable base <br />
            and link your Airtable data to this app.
          </SubTitle>
          <div style={{ marginLeft: '-3px' }}>
            <Input
              value={value}
              onChange={e => onChange(e.target.value)}
              placeholder="Paste your API key here"
            />
          </div>
          <Error>{error}</Error>
        </div>
        <Button onClick={onSubmit}>Continue</Button>
      </ActiveZone>
      <InfoZone>
        <span>You'll find the API Key in your</span>{' '}
        <a target="_blank" href="https://airtable.com/account">
          Airtable Account page
        </a>
        <GifContainer alt="token gif" src={tokenGif} />
        <Button
          onClick={() => window.open('https://airtable.com/account')}
          type="border"
        >
          Open Airtable Account
        </Button>
      </InfoZone>
    </Wrapper>
  );
};

export default Token;
