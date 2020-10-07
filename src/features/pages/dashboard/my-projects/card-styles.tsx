import styled from 'styled-components';

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #fff;
  height: 68px;
  transition: all 0.2s ease-in-out;
  padding: 14px 16px;
`;

export const Settings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 22px;
  width: 22px;
  transition: all 0.2s ease-in-out;
  
  :hover {
    opacity: 0.7;
  }
`;

export const SettingsCircle = styled.div`
  width: 6px;
  height: 6px;
  background-color: #7f89a1;
  border-radius: 50%;
  user-select: none;
  pointer-events: none;
`;

export const PaddingImage = styled.img`
  width: 100%;
  object-fit: cover;
  padding: 16px 0 16px 16px;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 14px;
`;

export const CardName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 180px;
`;

export const CardTime = styled.div`
  color: #777777;
`;

export const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  height: 36px;
`;

export const Wrapper = styled.div`
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

  &:hover ${CardFooter} {
    background: #daf7ff;
  }
`;

export const Preview = styled.div`
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
