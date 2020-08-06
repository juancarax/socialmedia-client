import styled from "styled-components";
import { ReactComponent as TrashIcon } from "../../trash.svg";

import { ReactComponent as Comment } from "../../comment.svg";

export const PostContainer = styled.div`
  background-color: white;
  width: 55.5rem;
  height: ${(props) => (props.imageId ? "50rem" : "20rem")};
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media screen and (max-width: 900px) {
    width: 100%;
    height: ${(props) => (props.imageId ? "54rem" : "22rem")};
  }
`;

export const PostImageContainer = styled.div`
  display: flex;
`;

export const PostImage = styled.img`
  width: 100%;
  display: block;
`;

export const PostBody = styled.div``;

export const PostTextContainer = styled.div`
  display: flex;
`;
export const PostText = styled.p`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 12px;
  align-self: center;
`;

export const UserInfo = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const UserBox = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 17px;
  justify-content: space-between;
`;

export const UserImage = styled.img`
  height: 6.5rem;
  width: 6.5rem;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 5px;
`;

export const PostDate = styled.p`
  color: #757575;
  font-family: inherit;
`;

export const Username = styled.p`
  color: #212121;
  font-size: 14px;
  line-weight: 900;
`;
export const Figure = styled.figure``;
export const PostOptionsContainer = styled.div`
  margin-top: 24px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;

export const DeleteIcon = styled(TrashIcon)`
  fill: #e53935;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 5px;
  margin-right: 3px;
`;

export const LikeCommentsContainer = styled.div`
  align-self: end;
  display: flex;
`;

export const CommentIcon = styled(Comment)`
  fill: #2196f3;
  width: 2rem;
  height: 2rem;
`;

export const SpanComment = styled.span`
  margin-left: 8px;
  margin-right: 4rem;
  color: #2196f3;
  font-size: 15px;
`;
