import styled from "styled-components";

export const BackgroundVideoContainer = styled.div`
  position: relative;
  height: ${({ height }) => height || "inherit"};
  width: ${({ width }) => width || "100%"};
}

  &::after {
    content: "";
    background: linear-gradient(180deg, #00000069 10%, #000);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;

export const StyledVideoForBackground = styled.video`
  display: block;
  height: inherit;
  object-fit: cover;
  width: 100%;
  z-index: -1;
`;
