import styled from "styled-components";

export const StyledBackdrop = styled.div`
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#0005"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
