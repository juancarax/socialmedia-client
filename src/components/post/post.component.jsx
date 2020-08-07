import React, { useContext, useState } from "react";
import {
  PostContainer,
  PostText,
  UserInfo,
  SpanComment,
  UserBox,
  LikeCommentsContainer,
  CommentIcon,
  DeleteIcon,
  PostOptionsContainer,
  Username,
  PostDate,
} from "./post.styles";
import CustomButton from "../custom-button/custom-button.component";
import moment from "moment";
import { AuthContext } from "../../context/auth";
import { Image } from "cloudinary-react";
import {
  GET_USER_QUERY,
  GET_POSTS_TO_UPDATE_CACHE,
  DELETE_POST_MUTATION,
} from "../../gql/querys";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import LikeButton from "../likepost/likepost.component";
import DeletePostButton from "../delete-post/delete-post.component";

const Post = ({
  post: {
    body,
    createdAt,
    likeCount,
    commentCount,
    username,
    likes,
    id,
    comments,
    imageId,
  },
}) => {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: { username },
  });

  if (loading) return null;
  return (
    <PostContainer comments={commentCount} imageId={imageId}>
      <div>
        <UserBox>
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() => history.push(`/users/${username}`)}
          >
            <Image
              cloudName="dop6uan6j"
              publicId={
                data.getUser.imageId
                  ? data.getUser.imageId
                  : "frijydof6cc7a25z9m0e"
              }
              width="70"
              height="70"
              style={{ marginLeft: "20px" }}
              radius="70"
              crop="scale"
            />{" "}
            <UserInfo>
              <Username>{username}</Username>
              <PostDate>{moment(createdAt).fromNow(true)} </PostDate>
            </UserInfo>
          </div>
          <CustomButton
            onClick={() => history.push(`/posts/${id}`)}
            style={{
              alignSelf: "center",
              backgroundColor: "#eb4d3b",
              marginRight: "2rem",
            }}
            publish
            type="submit"
          >
            GO TO POST
          </CustomButton>
        </UserBox>
      </div>
      {imageId && (
        <Image
          cloudName="dop6uan6j"
          publicId={imageId}
          width="300"
          responsive
          responsiveUseBreakpoints="true"
          height="300"
          style={{ margin: "0 auto" }}
          crop="scale"
        />
      )}
      <PostText>{body}</PostText>
      <PostOptionsContainer>
        {user && user.username === username ? (
          <DeletePostButton
            Mutation={DELETE_POST_MUTATION}
            Query={GET_POSTS_TO_UPDATE_CACHE}
            id={id}
          >
            <DeleteIcon />
            Delete Post
          </DeletePostButton>
        ) : (
          <div></div>
        )}
        <LikeCommentsContainer>
          <LikeButton user={user} post={{ id, likes, likeCount }} />

          <CommentIcon onClick={() => history.push(`/posts/${id}`)} />
          <SpanComment>{commentCount}</SpanComment>
        </LikeCommentsContainer>
      </PostOptionsContainer>
    </PostContainer>
  );
};

export default Post;
