import React from "react";
import {
  CommentContainer,
  UserComment,
  UserBox,
  BodyContainer,
  BodyComment,
  DeleteIcon,
} from "./comments.styles";
import DeletePostButton from "../delete-post/delete-post.component";
import {
  GET_SINGLE_POST_QUERY_TO_UPDATE,
  DELETE_COMMENT_MUTATION,
  GET_USER_QUERY,
} from "../../gql/querys";

import { Image } from "cloudinary-react";
import { useQuery } from "@apollo/react-hooks";

const Comment = ({ comment: { username, createdAt, body, id }, postId }) => {
  const { data: getUser } = useQuery(GET_USER_QUERY, {
    variables: { username },
  });
  return (
    <CommentContainer>
      <UserBox>
        <Image
          cloudName="dop6uan6j"
          publicId={
            getUser.getUser.imageId
              ? getUser.getUser.imageId
              : "frijydof6cc7a25z9m0e"
          }
          width="40"
          responsive
          responsiveUseBreakpoints="true"
          height="40"
          style={{ marginTop: "10px", marginLeft: "5px" }}
          radius="70"
          crop="scale"
        />{" "}
        <BodyContainer>
          <UserComment>{username}</UserComment>
          <BodyComment>{body}</BodyComment>
        </BodyContainer>
      </UserBox>
      <DeletePostButton
        id={id}
        postId={postId}
        Query={GET_SINGLE_POST_QUERY_TO_UPDATE}
        Mutation={DELETE_COMMENT_MUTATION}
      >
        <DeleteIcon /> Delete comment
      </DeletePostButton>
    </CommentContainer>
  );
};
export default Comment;
