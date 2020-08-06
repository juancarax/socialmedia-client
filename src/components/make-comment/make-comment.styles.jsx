import styled from "styled-components";

export const MakeCommentForm = styled.form`
  display: flex;
  padding-top: 0.5rem;
`;

export const MakeCommentInput = styled.input`
  font-family: inherit;
  font-size: 1.2rem;
  color: #707070;
  background-color: #fafafa;
  border: none;
  padding: 0.8rem 0.8rem;
  border: 1px solid #79e5f1;
  border-radius: 0;
  width: 80%;
  transition: all 0.2s;

  &:focus {
    outline: none;
    width: 100;
  }
  &::-webkit-input-placeholder {
    font-weight: 100;
    color: #707070;
  }
`;
