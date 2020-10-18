import React from 'react';
import styled from 'styled-components';
import { AppIconTemplate,  CreateAppPlaceholder1Svg } from '../../../../assets/dashboard';

import {
  CardDescription,
  CardFooter,
  CardName,
  CardTime,
  SettingsCircle,
  InfoIcon,
  PaddingImage,
  Info,
  Preview,
  Wrapper,
  Settings,
} from './card-styles';

interface CardProps {
  onClick: () => void;
  name: string,
  photo?: string,
  gradient?: string,
  updatedAt: string,
}

const Image = styled(PaddingImage)`
  padding: 0;
  width: 112px;
  height: 112px;
`;

const CreateProjectCard: React.FC<CardProps> = ({
  onClick,
  name,
  photo,
  gradient,
  updatedAt,
  }) => {
  return (
    <Wrapper onClick={onClick}>
      <Preview gradient={gradient}>
        {photo
          ? <Image src={photo} />
          : <PaddingImage src={CreateAppPlaceholder1Svg} />
        }
      </Preview>
      <CardFooter>
        <Info>
          <InfoIcon src={AppIconTemplate} />
          <CardDescription>
            <CardName title={name}>
              {name}
            </CardName>
            <CardTime>
              {updatedAt}
            </CardTime>
          </CardDescription>
        </Info>
          <Settings onClick={() => {}}>
            <SettingsCircle />
            <SettingsCircle />
            <SettingsCircle />
          </Settings>
      </CardFooter>
    </Wrapper>
  );
};

export default CreateProjectCard;
