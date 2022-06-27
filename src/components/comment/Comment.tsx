import { CommentInterface } from "../../interfaces";
import { CommentDate, CommentedBy } from "../../styled";

export function Comment({
  postedBy: { name },
  comment,
  timePassed,
}: CommentInterface) {
  return (
    <div>
      <div>
        <CommentedBy>{name}</CommentedBy>
        <CommentDate>{timePassed}</CommentDate>
      </div>
      <p>{comment}</p>
    </div>
  );
}
