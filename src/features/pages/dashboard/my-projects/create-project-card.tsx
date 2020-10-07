import React from 'react';
import styled from 'styled-components';
import {
  CreateAppIcon,
  CreateAppPlaceholder1Svg,
} from '../../../../assets/dashboard';

import {
  CardDescription,
  CardFooter,
  CardName,
  InfoIcon,
  PaddingImage,
  Info,
  Preview,
  Wrapper,
} from './card-styles';

interface CardProps {
  onClick: () => void;
}

const StyledCardDescription = styled(CardDescription)`
  justify-content: center;
`;

const CreateProjectCard: React.FC<CardProps> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Preview>
        <PaddingImage src={CreateAppPlaceholder1Svg} />
      </Preview>
      <CardFooter>
        <Info>
          <InfoIcon src={CreateAppIcon} />
          <StyledCardDescription>
            <CardName title={'Create App'}>
              Create App
            </CardName>
          </StyledCardDescription>
        </Info>
      </CardFooter>
    </Wrapper>
  );
};

export default CreateProjectCard;
