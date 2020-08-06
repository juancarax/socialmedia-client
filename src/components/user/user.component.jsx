import React, { useState, useContext } from "react";
import {
  UserComponentContainer,
  UserDiv,
  UserBox,
  UserImage,
  Username,
  PostDate,
  ChangeImageButton,
  ImageConfirmationButton,
  ButtonsContainer,
  ChangeImageLabel,
} from "./user.styles";
import { Image } from "cloudinary-react";

import { AuthContext } from "../../context/auth";
import { GET_USER_QUERY } from "../../gql/querys";

import axios from "axios";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const UserProfile = ({ match }) => {
  const username = match.params.username;
  const { user } = useContext(AuthContext);

  const [imageUpload, setImageUpload] = useState();
  const [displayConfirm, setDisplayConfirm] = useState(false);

  const { loading, error, data } = useQuery(GET_USER_QUERY, {
    variables: { username },
  });

  const [
    uploadImage,
    { loading: mutationLoading, error: errorMutation },
  ] = useMutation(UPDATE_USER_IMAGE, {
    update(cache, { data: { updateImage } }) {
      const { getUser } = cache.readQuery({ query: GET_USER_QUERY });
      cache.readQuery({
        query: GET_USER_QUERY,
        data: updateImage,
      });
    },
  });

  const fileSelectedHandler = (event) => {
    setImageUpload(event.target.files[0]);
    setDisplayConfirm(true);
  };
  const handleSubmit = async (e) => {
    const formData = new FormData(); //Upload image to cloudinary
    formData.append("file", imageUpload);
    formData.append("upload_preset", "v0f73ult");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dop6uan6j/upload",
      formData
    );
    console.log(response);
    await uploadImage({
      variables: { newImageId: response.data.public_id },
    });
  };

  if (loading) return <p>loading xd</p>;
  if (error) return <p>wtf</p>;

  return (
    <UserComponentContainer>
      <UserDiv>
        <UserBox>
          <Image
            cloudName="dop6uan6j"
            publicId={
              data.getUser.imageId
                ? data.getUser.imageId
                : "frijydof6cc7a25z9m0e"
            }
            width="100"
            height="100"
            style={{ margin: "0 auto" }}
            radius="100"
            crop="scale"
          />{" "}
          <Username>{data.getUser.username} </Username>
          <PostDate>{data.getUser.createdAt}</PostDate>
          {user && user.username === username && (
            <div>
              <ChangeImageButton
                type="file"
                name="update"
                id="update"
                onChange={fileSelectedHandler}
              />
              <ChangeImageLabel for="update">Change Image</ChangeImageLabel>
            </div>
          )}
          {displayConfirm && (
            <ButtonsContainer>
              <ImageConfirmationButton onClick={handleSubmit}>
                Confirm
              </ImageConfirmationButton>
              <ImageConfirmationButton
                onClick={() => {
                  setImageUpload(null);
                  setDisplayConfirm(false);
                }}
                cancel
              >
                Cancel
              </ImageConfirmationButton>
            </ButtonsContainer>
          )}
        </UserBox>
      </UserDiv>
    </UserComponentContainer>
  );
};

const UPDATE_USER_IMAGE = gql`
  mutation updateImage($newImageId: String!) {
    updateImage(newImageId: $newImageId) {
      id
      username
      createdAt
      email
      imageId
    }
  }
`;

export default UserProfile;
