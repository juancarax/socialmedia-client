import styled from "styled-components";
import { ReactComponent as TrashIcon } from "../../trash.svg";

export const CommentContainer = styled.div`
  width: 55.5rem;
  background-color: white;
  padding-bottom: 10px;
  padding-top: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
`;

export const DeleteIcon = styled(TrashIcon)`
  fill: #e53935;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 5px;
  margin-right: 3px;
`;
export const UserComment = styled.p`
  font-size: 15px;
  border-bottom: 10px;
  font-family: inherit;
`;

export const UserImage = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 5px;º
`;

export const UserBox = styled.div`
  display: flex;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 10px;
`;

export const BodyComment = styled.p`
  font-family: inherit;
  font-size: 12px;
`;
