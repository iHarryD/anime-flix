import styled from "styled-components";
import { SecondaryButton } from "./Buttons.styled";
import { InputWithBottomBorder } from "./Input.styled";

export const CommentInputContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const CommentLoaderContainer = styled.div`
  margin: auto;
  width: 2rem;
`;

export const CommentInput = styled(InputWithBottomBorder)`
  flex-grow: 1;
`;

export const PostCommentButton = styled(SecondaryButton)`
  width: 8rem;
`;

export const NoCommentsText = styled.p`
  opacity: 0.7;
  text-align: center;
`;
