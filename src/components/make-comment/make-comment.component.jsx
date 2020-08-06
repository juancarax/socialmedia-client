import React, { useState } from "react";
import { MakeCommentForm, MakeCommentInput } from "./make-comment.styles";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";

const MakeComment = ({ postId, user }) => {
  const [state, setState] = useState({
    body: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  const [makeComment, { error }] = useMutation(CREATE_COMMENT_MUTATION, {
    update(cache) {
      console.log(cache);
    },
  });
  if (error) console.log(error.graphQLErrors);

  const handleSubmit = (event) => {
    event.preventDefault();
    makeComment({ variables: { postId, body } });
    setState({ body: "" });
  };

  const { body } = state;
  return (
    <MakeCommentForm
      onSubmit={user ? handleSubmit : () => history.push("/register")}
    >
      <MakeCommentInput
        placeholder="Make a comment"
        name="body"
        value={body}
        onChange={handleChange}
      />
      <CustomButton
        NormalButton
        squared
        type="submit"
        style={{ padding: ".8rem .8rem", fontSize: "1.3rem" }}
      >
        Make a comment
      </CustomButton>
    </MakeCommentForm>
  );
};

const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export default MakeComment;
