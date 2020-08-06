import React from "react";
import { CommentsDirectoryContainer } from "./comments-directory.styles";

import Comment from "../comments/comments.component";

const CommentsDirectory = ({ comments, postId }) => {
  console.log(postId);
  return (
    <CommentsDirectoryContainer>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} postId={postId} />
      ))}
    </CommentsDirectoryContainer>
  );
};

export default CommentsDirectory;
