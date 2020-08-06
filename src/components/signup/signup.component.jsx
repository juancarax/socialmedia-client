import React, { useState, useContext } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignUpContainer, SignUpTitle, Form } from "./signup.styles";
import Loading from "../loading/loading.component";
const SignUpComponent = () => {
  const context = useContext(AuthContext);
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const { username, email, password, confirmPassword } = state;
  let history = useHistory();

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result) {
      console.log(result);
      context.login(result.data.register);
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
    addUser();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setState({ ...state, [name]: value });
  };
  if (loading)
    return (
      <SignUpContainer loading>
        <Loading style={{ margin: "0 auto" }} />
      </SignUpContainer>
    );
  return (
    <SignUpContainer>
      <SignUpTitle> I do not have an account</SignUpTitle>
      <Form onSubmit={handleSubmit} id="signUpForm">
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
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          error={errors.email}
          label="Email"
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
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          error={errors.confirmPassword}
          label="Confirm password"
          required
        />
      </Form>
      <CustomButton
        style={{ marginLeft: "stretch" }}
        NormalButton
        squared
        type="submit"
        form="signUpForm"
      >
        SIGN UP{" "}
      </CustomButton>
    </SignUpContainer>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default SignUpComponent;
