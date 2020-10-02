import React from 'react';
import styled from 'styled-components';
import {
  CreateAppIcon,
  AppIconTemplate,
  CreateAppPlaceholder1Svg,
} from '../../../assets/dashboard/index';

interface CardProps {
  onClick: () => void;
  name?: string,
  id?: number,
  photo?: string,
  updatedAt?: string,
}

const Card: React.FC<CardProps> = ({
  onClick,
  name,
  id,
  photo,
  updatedAt,
  }) => {

  const isProjectCreateButton = !id;

  return (
    <Wrapper onClick={onClick}>
      <Preview>
        <Image hasPadding={isProjectCreateButton} src={photo ? photo : CreateAppPlaceholder1Svg}  />
      </Preview>
      <Info>
        <InfoIcon src={isProjectCreateButton ? CreateAppIcon : AppIconTemplate} />
        <CardDescription>
          <CardName title={name}>
            {name}
          </CardName>
          <CardTime>
            {updatedAt}
          </CardTime>
        </CardDescription>
      </Info>
    </Wrapper>
  );
};

export default Card;

const Image = styled.img<{ hasPadding: boolean }>`
  width: 100%;
  object-fit: cover;
  ${({ hasPadding }) => hasPadding && `padding: 16px 0 16px 16px`};
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 180px;
`;

const CardTime = styled.div`
  color: #777777;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

const Info = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #fff;
  height: 68px;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 16px;
`;

const Wrapper = styled.div`
  overflow: hidden;
  height: 280px;
  width: 272px;
  flex-basis: 270px;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.2);
  }

  &:hover ${Info} {
    background: #daf7ff;
  }
`;

const Preview = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 212px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-image: linear-gradient(
    to bottom,
    rgba(97, 228, 255, 0.3),
    rgba(0, 160, 255, 0.35)
  );
`;
