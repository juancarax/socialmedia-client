import React, { useState, useContext } from "react";
import {
  MakePostContainer,
  FormInputContainer,
  Form,
  ErrorMessage,
  UploadImageButton,
  UploadImageLabel,
  UploadOptions,
} from "./makepost.styles";
import CustomButton from "../custom-button/custom-button.component";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { GET_POSTS } from "../../gql/querys";
import { AuthContext } from "../../context/auth";
import PopUp from "../popup/popup.component";
import axios from "axios";

import Loading from "../loading/loading.component";

const MakePost = () => {
  const { user } = useContext(AuthContext);

  const [imageUpload, setImageUpload] = useState(null);
  const [state, setState] = useState({
    body: "",
  });
  const [PopUpToggle, setPopUpToggle] = useState(false);

  const fileSelectedHandler = (event) => {
    setImageUpload(event.target.files[0]);
  };

  const handlePopUp = () => {
    setPopUpToggle(!state);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  };

  //Part of the code in which the image is uploaded with cloudinary

  const { body } = state;
  const [createPostMutation, { error: mutationError, loading }] = useMutation(
    CREATE_POST_MUTATION,
    {
      update(cache, { data: { createPost } }) {
        const { getPosts } = cache.readQuery({
          query: GET_POSTS,
        });
        cache.writeQuery({
          query: GET_POSTS,
          data: { getPosts: [createPost, ...getPosts] },
        });
        setState({ body: "" });
      },
      onError(err) {
        console.log(err.graphQLErrors[0].extensions.exception.errors);
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(); //Upload image to cloudinary
    formData.append("file", imageUpload);
    formData.append("upload_preset", "v0f73ult");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dop6uan6j/upload",
      formData
    );
    await createPostMutation({
      variables: { body, imageId: response.data.public_id },
    });

    if (!user) {
      setPopUpToggle(true);
    }
  };
  if (loading)
    return (
      <MakePostContainer>
        <Loading />
        Your post is being published
      </MakePostContainer>
    );

  return (
    <MakePostContainer error={mutationError}>
      <Form onSubmit={handleSubmit}>
        {mutationError && (
          <ErrorMessage style={{ alignSelf: "center" }}>
            {mutationError.graphQLErrors[0].message}{" "}
          </ErrorMessage>
        )}
        <FormInputContainer
          placeholder="Make a post"
          name="body"
          value={body}
          onChange={handleChange}
        />
        <UploadOptions>
          {user && !imageUpload && (
            <div>
              <UploadImageButton
                type="file"
                name="file"
                id="file"
                onChange={fileSelectedHandler}
              />
              <UploadImageLabel for="file">Upload Image</UploadImageLabel>
            </div>
          )}
          <CustomButton publish type="submit" style={{ alignSelf: "center" }}>
            Make a post
          </CustomButton>
        </UploadOptions>
        {
          !user && PopUpToggle && (
            <PopUp handlePopUp={handlePopUp}>Sign up to make a post!</PopUp>
          ) // If user does not exist and the Make Post Button has been clicked, Toggle PopUp.
        }
      </Form>
    </MakePostContainer>
  );
};

export default MakePost;

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!, $imageId: ID) {
    createPost(body: $body, imageId: $imageId) {
      body
      createdAt
      id
      username
      imageId
      likes {
        id
        username
        createdAt
      }
      comments {
        id
        username
        createdAt
        body
      }
      likeCount
      commentCount
    }
  }
`;
