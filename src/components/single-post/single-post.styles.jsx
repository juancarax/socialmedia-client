import styled from "styled-components";
import { ReactComponent as TrashIcon } from "../../trash.svg";

import { ReactComponent as Comment } from "../../comment.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: inherit;
  background-color: white;
  margin: 3rem auto;
  width: 35%;
  border-bottom: 2px solid #79e5f1;
  height: ${(props) => (props.isImage ? "50rem" : "20rem")};
  ${(props) =>
    props.loading &&
    "background-color: #F5F5F5;  margin: 0 auto; border-bottom: none; align-items: center"};

  @media screen and (max-width: 900px) {
    width: 48rem;
    height: ${(props) => (props.isImage ? "55rem" : "25rem")};
  }
  @media screen and (max-width: 600px) {
    width: 80vw;
    height: ${(props) => (props.isImage ? "80vh" : "30vh")};
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: ${(props) => (props.isImage ? "87vh" : "35vh")};
  }
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  font-family: inherit;
  font-size: 1.8rem;
`;

export const PostDate = styled.div`
  font-size: 1.2rem;
  font-family: inherit;
  color: #757575;
`;
export const PostText = styled.p`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 12px;
  align-self: center;
`;

export const DeleteIcon = styled(TrashIcon)`
  fill: #e53935;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 5px;
  margin-right: 3px;
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
export const PostOptionsContainer = styled.div`
  margin-top: 24px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;

export const LikeCommentsContainer = styled.div`
  align-self: end;
  display: flex;
`;
