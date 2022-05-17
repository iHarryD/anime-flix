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

export const WhiteInput = styled.input`
  background: #fff;
  border-radius: var(--BORDER-RADIUS);
  color: #000;
  padding: calc(var(--INPUT-PADDING-Y) - var(--INPUT-BORDER-WIDTH))
    calc(var(--INPUT-PADDING-X) - var(--INPUT-BORDER-WIDTH));
`;
