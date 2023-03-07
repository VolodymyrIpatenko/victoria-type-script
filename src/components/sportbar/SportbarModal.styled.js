import styled, { keyframes } from 'styled-components';

const zoom = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    color: greenyellow;
  }
`;

export const Caption = styled.span`
  margin: auto;
  animation: ${zoom} 2s;
  text-align: center;
  font-size: 25px;
  color: #ccc;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 30vh;
  right: 3vh;
  color: #f1f1f1;
  font-size: 2rem;
  font-weight: bold;
  transition: 0.3s;

  &:hover,
  &:focus {
    animation: ${spin} 1s;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalContent = styled.img`
  width: 300px;
  margin: auto;
  position: relative;
  z-index: 1;
  animation: ${zoom} 2s;
  @media screen and (min-width: 1199px) {
    width: 450px;
  }
`;
