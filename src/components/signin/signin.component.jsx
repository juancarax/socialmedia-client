import React, { useState, useContext } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInContainer, SignInTitle, Form } from "./signin.styles";
import Loading from "../loading/loading.component";
const SignInComponent = () => {
  const context = useContext(AuthContext);

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const { username, email, password, confirmPassword } = state;
  let history = useHistory();

  const [loginUser, { loading }] = useMutation(LOG_IN_USER, {
    update(_, result) {
      console.log(result);
      context.login(result.data.login);
      history.push("/");
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.exception.errors);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: {
      username,
      email,
      password,
      confirmPassword,
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setState({ ...state, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle> Log In</SignInTitle>
      <Form onSubmit={handleSubmit} id="signInForm">
        <FormInput
          type="text"
          name="username"
          value={username}
          error={errors.username}
          handleChange={handleChange}
          label="Username"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          error={errors.password}
          label="Password"
          required
        />
      </Form>
      <CustomButton
        style={{ alignSelf: "stretch" }}
        inverted
        type="submit"
        form="signInForm"
        squared
      >
        SIGN IN{" "}
      </CustomButton>
    </SignInContainer>
  );
};

const LOG_IN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default SignInComponent;
