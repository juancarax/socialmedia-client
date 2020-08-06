import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: inherit;
  width: 380px;
  ${(props) => props.loading && "align-items: center; justify-content: center"};
  @media screen and (max-width: 900px) {
    height: 70vh;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 15px 0;
  align-self: center;
`;
export const Form = styled.form``;
