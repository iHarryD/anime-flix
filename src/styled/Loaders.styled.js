import styled from "styled-components";

export const BasicSpinnerLoader = styled.div`
  animation: loader-spins 1.5s infinite;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid var(--ACCENT-CLR);
  border-top: 2px solid #00000033;
  width: 100%;

  @keyframes loader-spins {
    100% {
      transform: rotate(360deg);
    }
  }
`;
