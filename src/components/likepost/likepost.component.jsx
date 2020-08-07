import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  SpanLike,
  FilledHeart,
  NormalHeart,
  LikeContainer,
} from "./likepost.styles";
import { Link } from "react-router-dom";

import gql from "graphql-tag";

const LikeButton = ({ user, post: { id, likeCount, likes } }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [likes, user]);

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: id },
    update(result) {},
    onError(err) {
      console.log(err.graphQLErrors);
    },
  });

  const isUserAndPostLiked = user ? (
    liked ? (
      <FilledHeart />
    ) : (
      <NormalHeart />
    )
  ) : (
    <Link to="/login">
      {" "}
      <NormalHeart />
    </Link>
  );

  return (
    <LikeContainer onClick={likePost}>
      {isUserAndPostLiked}
      <SpanLike>{likeCount}</SpanLike>
    </LikeContainer>
  );
};

export default LikeButton;

const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: String!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
        createdAt
      }
      likeCount
    }
  }
`;
