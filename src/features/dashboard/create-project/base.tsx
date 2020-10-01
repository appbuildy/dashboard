import React from 'react';
import { Input, Button } from '../../../ui';
import baseGif from './base.gif';

import {
  Wrapper,
  ActiveZone,
  Title,
  SubTitle,
  InfoZone,
  GifContainer,
  Error,
} from './styles';

interface IBase {
  value: string;
  error: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const Base = (props: IBase) => {
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
          <Title>Share a Link to your Base</Title>
          <SubTitle>
            Choose the base that you use as a database for this app. <br />
            Paste a link to this base.
          </SubTitle>
          <div style={{ marginLeft: '-3px' }}>
            <Input
              value={value}
              onChange={e => onChange(e.target.value)}
              placeholder="Paste the Link here"
            />
          </div>
          <Error>{error}</Error>
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
        <Button onClick={onSubmit}>Continue</Button>
      </ActiveZone>
      <InfoZone>
        <span>
          You'll find this in the Share menu, which you can access <br />
          from the top right-hand corner of your Airtable base.
        </span>
        <GifContainer alt="token gif" src={baseGif} />
        <Button
          onClick={() => window.open('https://airtable.com')}
          type="border"
        >
          Open Airtable
        </Button>
      </InfoZone>
    </Wrapper>
  );
};

export default Base;
