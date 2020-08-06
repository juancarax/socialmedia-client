import styled, { css } from "styled-components";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: grey;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 12px;
  padding: 15px 15px 15px 10px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => (props.error ? "red" : "#79E5F1")};
  border-radius: 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${(props) => props.length && shrinkLabelStyles}
`;

export const ErrorMessage = styled.p`
  border-top: 10px;
  color: red;
  font-weight: 600;
`;
