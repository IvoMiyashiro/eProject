import styled, { keyframes } from 'styled-components';

interface Styles {
  size: any;
}

export const skChase = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const skChaseDot = keyframes`
  80%,
  100% {
    transform: rotate(360deg);
  }
`;

export const skChaseDotBefore = keyframes`
  50% {
    transform: scale(0.4);
  }

  100%,
  0% {
    transform: scale(1);
  }
`;

export const Chase = styled.div<Styles>`
  width: ${props => props.size};
  height: ${props => props.size};
  position: relative;
  animation: ${skChase} 2.5s infinite linear both;
`;

export const Dot = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${skChaseDot} 2s infinite ease-in-out both;

  :before {
    content: "";
    display: block;
    width: 25%;
    background-color: ${prosp => prosp.theme.color_neutral_2};
    height: 25%;
    border-radius: 100%;
    animation: ${skChaseDotBefore} 2s infinite ease-in-out both;
  }
  :nth-child(1) {
    animation-delay: -1.1s;
  }
  :nth-child(2) {
    animation-delay: -1s;
  }
  t:nth-child(3) {
    animation-delay: -0.9s;
  }
  :nth-child(4) {
    animation-delay: -0.8s;
  }
  :nth-child(5) {
    animation-delay: -0.7s;
  }
  :nth-child(6) {
    animation-delay: -0.6s;
  }
  :nth-child(1):before {
    animation-delay: -1.1s;
  }
  :nth-child(2):before {
    animation-delay: -1s;
  }
  :nth-child(3):before {
    animation-delay: -0.9s;
  }
  :nth-child(4):before {
    animation-delay: -0.8s;
  }
  :nth-child(5):before {
    animation-delay: -0.7s;
  }
  :nth-child(6):before {
    animation-delay: -0.6s;
  }
`;
