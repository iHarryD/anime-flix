import {
  VerticleFlexWithGap,
  CommentInputContainer,
  CommentInput,
  PostCommentButton,
  CommentLoaderContainer,
  BasicSpinnerLoader,
  NoCommentsText,
} from "../../styled";
import { CommentInterface } from "../../interfaces";
import { useEffect, useRef, useState } from "react";
import { Comment, ButtonSpinner } from "../../components";
import { getComments, postComment } from "../../services/commentServices";
import { useAuth } from "../../contexts";

export function CommentsContainer({ videoID }: { videoID: string }) {
  const [comments, setComments] = useState<CommentInterface[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPostingComment, setIsPostingComment] = useState<boolean>(false);
  const commentInputRef = useRef<HTMLInputElement | null>(null);
  const { userCredentials } = useAuth();

  useEffect(() => {
    getComments(videoID, setIsLoading, (result) => setComments(result.data));
  }, [videoID]);

  function handlePostComment(videoID: string, comment: string) {
    if (comment.replaceAll(" ", "").length === 0) return;
    postComment(videoID, comment, setIsPostingComment, (result) => {
      if (commentInputRef.current) {
        commentInputRef.current.value = "";
      }
      getComments(videoID, setIsLoading, (result) => {
        setComments(result.data);
      });
    });
  }

  function toRender() {
    if (comments === null || isLoading) {
      return;
    } else if (comments.length === 0) {
      return <NoCommentsText>No comments</NoCommentsText>;
    } else {
      return (
        <VerticleFlexWithGap>
          {comments.map(({ postedBy, comment, timePassed }) => (
            <Comment
              postedBy={postedBy}
              comment={comment}
              timePassed={timePassed}
            />
          ))}
        </VerticleFlexWithGap>
      );
    }
  }

  return (
    <VerticleFlexWithGap>
      <h3>Comments</h3>
      {userCredentials && (
        <CommentInputContainer>
          <CommentInput placeholder="Type your comment" ref={commentInputRef} />
          <PostCommentButton
            onClick={() => {
              if (commentInputRef.current === null) return;
              handlePostComment(videoID, commentInputRef.current.value);
            }}
          >
            {isPostingComment ? <ButtonSpinner colorHex="#fff" /> : "Comment"}
          </PostCommentButton>
        </CommentInputContainer>
      )}
      {isLoading && (
        <CommentLoaderContainer>
          <BasicSpinnerLoader />
        </CommentLoaderContainer>
      )}
      {toRender()}
    </VerticleFlexWithGap>
  );
}
