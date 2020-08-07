import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import Loading from "../loading/loading.component";
import {
  Container,
  UserBox,
  UserInfo,
  UserName,
  PostDate,
  PostText,
  PostOptionsContainer,
  LikeCommentsContainer,
  CommentIcon,
  SpanComment,
  DeleteIcon,
} from "./single-post.styles.jsx";
import { useQuery } from "@apollo/react-hooks";
import {
  GET_USER_QUERY,
  GET_POSTS_TO_UPDATE_CACHE,
  DELETE_POST_MUTATION,
  GET_SINGLE_POST_QUERY,
} from "../../gql/querys";
import moment from "moment";
import { Image } from "cloudinary-react";

import CommentsDirectory from "../comments-directory/comments-directory.component";
import LikeButton from "../likepost/likepost.component";
import DeletePostButton from "../delete-post/delete-post.component";
import MakeComment from "../make-comment/make-comment.component";

const SinglePost = ({ match }) => {
  const { user } = useContext(AuthContext);
  const [displayComments, setDisplayComments] = useState(false);

  const postId = match.params.postId;

  const { loading: loadingPost, data: getPost } = useQuery(
    GET_SINGLE_POST_QUERY,
    {
      variables: { postId },
    }
  );

  const { loading: loadingUser, data: getUser } = useQuery(GET_USER_QUERY, {
    skip: !getPost,
    variables: { username: getPost && getPost.getPost.username },
  });

  if (loadingPost || loadingUser)
    return (
      <Container loading>
        <Loading />
      </Container>
    );
  return (
    <Container isImage={getPost.getPost.imageId}>
      <UserBox>
        <Image
          cloudName="dop6uan6j"
          publicId={
            getUser.getUser.imageId
              ? getUser.getUser.imageId
              : "frijydof6cc7a25z9m0e"
          }
          width="70"
          responsive
          responsiveUseBreakpoints="true"
          height="70"
          style={{ marginRight: "5px", marginBottom: "10px" }}
          radius="70"
          crop="scale"
        />{" "}
        <UserInfo>
          <UserName>{getPost.getPost.username} </UserName>
          <PostDate>{moment(getPost.getPost.createdAt).fromNow(true)}</PostDate>
        </UserInfo>
      </UserBox>
      {getPost.getPost.imageId && (
        <Image
          cloudName="dop6uan6j"
          responsive
          responsiveUseBreakpoints="true"
          publicId={getPost.getPost.imageId}
          width="300"
          height="300"
          style={{ margin: "0 auto" }}
          crop="scale"
        />
      )}
      <PostText>{getPost.getPost.body}</PostText>
      <PostOptionsContainer>
        {user && user.username === getPost.getPost.username ? (
          <DeletePostButton
            Mutation={DELETE_POST_MUTATION}
            id={getPost.getPost.id}
            Query={GET_POSTS_TO_UPDATE_CACHE}
          >
            <DeleteIcon />
            Delete Post
          </DeletePostButton>
        ) : (
          <div></div>
        )}
        <LikeCommentsContainer>
          <LikeButton
            user={user}
            post={{
              id: getPost.getPost.id,
              likes: getPost.getPost.likes,
              likeCount: getPost.getPost.likeCount,
            }}
          />

          <CommentIcon onClick={() => setDisplayComments(!displayComments)} />
          <SpanComment>{getPost.getPost.commentCount}</SpanComment>
        </LikeCommentsContainer>
      </PostOptionsContainer>
      {displayComments && (
        <div>
          <CommentsDirectory
            comments={getPost.getPost.comments}
            postId={getPost.getPost.id}
          />
          <MakeComment user={user} postId={getPost.getPost.id} />
        </div>
      )}
    </Container>
  );
};
export default SinglePost;
