import React from 'react';
import { Input, Button } from '../../../ui';
import { CreateAppPlaceholder2Svg } from '../../../assets/dashboard';
import styled from 'styled-components';

import {
  Wrapper,
  ActiveZone,
  Title,
  SubTitle,
  InfoZone,
} from './styles';

const StyledActiveZone = styled(ActiveZone)`
  padding: 30px 40px;
`;

const StyledInfoZone = styled(InfoZone)`
  max-width: 350px;
  padding: 50px 0 50px 50px;
`;

const StyledSubtitle = styled(SubTitle)`
  margin-bottom: 40px;
`;

interface IName {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const Name = (props: IName) => {
  const { onChange, value, onSubmit } = props;

  return (
    <Wrapper>
      <StyledActiveZone>
        <div>
          <Title>Create App</Title>
          <StyledSubtitle>
            No worries, you can name or change it later in case it’s still under question.
          </StyledSubtitle>
          <Input
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder="My App"
          />
        </div>
        <Button onClick={onSubmit}>Continue</Button>
      </StyledActiveZone>
      <StyledInfoZone>
        <img src={CreateAppPlaceholder2Svg} alt="shape" />
      </StyledInfoZone>
    </Wrapper>
  );
};

export default Name;
