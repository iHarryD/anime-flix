import styled from "styled-components";

export const VerticleFlexWithGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : "1rem")};
`;

export const AuthWarningText = styled.p`
  color: #ff5e5e;
  max-width: 25ch;
  font-size: 0.9rem;
  text-align: center;
`;
