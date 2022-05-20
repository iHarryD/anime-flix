import styled from "styled-components";

export const StyledInput = styled.input`
  background: #0000;
  border: var(--INPUT-BORDER-WIDTH) solid var(--INPUT-BORDER-CLR);
  border-radius: var(--INPUT-BORDER-RADIUS);
  color: inherit;
  font-size: inherit;
  outline: none;
  padding: calc(var(--INPUT-PADDING-Y) - var(--INPUT-BORDER-WIDTH))
    calc(var(--INPUT-PADDING-X) - var(--INPUT-BORDER-WIDTH));
`;

export const InputWithBackground = styled(StyledInput)`
  background: var(--INPUT-BACKGROUND-CLR);
  border-radius: var(--BORDER-RADIUS);
`;

export const StyledLabelInputContainer = styled.div`
  margin-top: 2rem;
  position: relative;

  input {
    width: 100%;
  }

  label {
    position: absolute;
    top: -1.5rem;
    left: var(--INPUT-PADDING-X);
  }
`;

export const DOBInput = styled(InputWithBackground)`
  height: 100%;
`;
