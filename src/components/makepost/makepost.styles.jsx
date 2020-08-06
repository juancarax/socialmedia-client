import styled, { css } from "styled-components";

export const MakePostContainer = styled.div`
  height: 15rem;
  width: 40%;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  ${(props) => props.error && "height: 16rem"};
  @media screen and (max-width: 900px) {
    width: 70%;
    height: 16.5rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 24vh;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FormInputContainer = styled.input`
  background: none;
  color: #707070;

  font-family: inherit;
  position: relative;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #eeeeee;
  width: 100%;
  padding: 40px 40px 40px 30px;
  font-size: 15px;

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
export const ErrorMessage = styled.p`
  border-top: 10px;
  color: red;
  font-weight: 600;
`;

export const UploadOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const UploadStyles = css`
  font-size: 1em;
  font-weight: 700;
  color: white;
  background-color: #79e5f1;
  display: inline-block;
  cursor: pointer;
`;

export const UploadImageButton = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  &:focus + label,
  & + label:hover {
    background-color: #f18579;
  }
`;

export const UploadImageLabel = styled.label`
  font-weight: 700;
  color: white;
  background-color: black;
  display: inline-block;
  border-radius: 10rem;
  padding: 0.8rem 2rem;
  margin-right 0.5rem;
  text-transform: uppercase;
  


  ${UploadStyles}
`;
