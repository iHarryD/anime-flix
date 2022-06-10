import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundAnimationContainer = styled.div`
  position: relative;
`;

export const RedirectionTextContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 2rem;
  text-align: center;
  transform: translateX(-50%);
`;

export const RedirectLink = styled(Link)`
  text-decoration: underline;
`;
