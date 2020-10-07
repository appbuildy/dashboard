import styled from 'styled-components';

export const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  height: 36px;
  border-radius: 6px;
  padding: 0 16px;
  background-image: linear-gradient(to bottom, #00b1ff, #0077f5);
  color: #fff;
  transition: all 0.2s ease-in-out;
  
  :hover {
    color: #fff;
    opacity: 0.7;
  }
`;
