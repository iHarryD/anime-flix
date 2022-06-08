import styled from "styled-components";

const BasicButton = styled.button`
  border-radius: var(--BORDER-RADIUS);
  cursor: pointer;
  font-weight: 600;
  padding: var(--BTN-PADDING-Y) var(--BTN-PADDING-X);

  svg {
    display: block;
    margin: auto;
    pointer-events: none;
  }
`;

export const PrimaryButton = styled(BasicButton)`
  background: var(--PRIMARY-BTN-BACKGROUND-CLR);
  color: var(--PRIMARY-BTN-FONT-CLR);
  position: relative;
  z-index: 1;

  &::after {
    background: var(--HOVER-OVERLAY-CLR);
    border-radius: inherit;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scale(0);
    z-index: -1;
  }

  &:hover::after {
    transform: scale(1);
  }
`;

export const SecondaryButton = styled(BasicButton)`
  background: var(--SECONDARY-BTN-BACKGROUND-CLR);
  border: var(--BTN-BORDER-WIDTH) solid currentColor;
  padding: calc(var(--BTN-PADDING-Y) - var(--BTN-BORDER-WIDTH))
    calc(var(--BTN-PADDING-X) - var(--BTN-BORDER-WIDTH));
`;

export const TextButton = styled(BasicButton)`
  font-size: 0.8rem;
  padding: 0;
`;

export const IconOnlyButton = styled(BasicButton)`
  font-size: ${({ size }) => (size ? size : "1rem")};
  padding: 0;
`;

export const IconButton = styled(BasicButton)`
  aspect-ratio: 1;
  background: var(--ICON-BTN-BACKGROUND-CLR);
  border-radius: 50%;
  padding: var(--ICON-BTN-PADDING);
`;
