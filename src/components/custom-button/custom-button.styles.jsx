import styled, { css } from "styled-components";

const PublishButtonStyles = css`
   {
    background-color: #79e5f1;
    color: white;
    font-family: inherit;
    font-weight: 700;
    border-radius: 10rem;
    padding: 1rem 2.2rem;
    transition: all 0.2s;
    display: inline-block;
    font-size: 1em;
    text-transform: uppercase;
    &:hover {
      background-color: #f18579;
    }
    &:active,
    &:focus {
      outline: none;
      box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
    }
  }
`;

const ButtonStyles = css`
 background-color: ${(props) => (props.NormalButton ? "#79E5F1" : "white")};
 color: ${(props) => (props.NormalButton ? "white" : "#79E5F1")};
 
 ${(props) => (props.squared ? "none" : "border-radius: 10rem")};
 border: ${(props) => (props.inverted ? "1px solid #79E5F1" : "none")};
 cursor: pointer;
 padding: 1.6rem 2.6rem;
 font-size: 1.5rem;
 font-weight: 600;
 font-family: inherit;
 &:focus {
  outline: none; 
}
  &:hover {
    ${(props) => props.NormalButton && "background-color: #3bd9eb"};
    box-shadow: 0 1rem 2rem rgba(black, .2);
  }
}
@media screen and (max-width: 600px) {
  font-size: 1.2 rem;
  font-weight: 600;
  padding: 1.2rem 2.2rem;

}
`;

const SignInButtonStyles = css`
 background-color: #f18579;
 color: white;
 border-radius: 10rem;
 border: none;
 cursor: pointer;
 padding: 1.6rem 3.5rem;
 font-size: 1.5rem;
 font-weight: 600;
 
 &:focus {
  outline: none;
}
  &:hover {
    background-color: #fc6c54;
    box-shadow: 0 1rem 2rem rgba(black, .2);
  }
}
`;

export const DeleteButton = css`
  background-color: white;
  color: #e53935;
  overflow: hidden;
  font-family: inherit;
  border-radius: none;
  &:hover {
    border-bottom: 1px solid red;
  }
`;

const getButtonStyles = (props) => {
  if (props.publish) {
    return PublishButtonStyles;
  } else if (props.NormalButton || props.inverted) {
    return ButtonStyles;
  } else {
    return DeleteButton;
  }
};

export const CustomButtonContainer = styled.button`
  border: none;
  cursor: pointer;

  ${getButtonStyles}
`;

export const NormalButton = styled.button`
  border: none;
  cursor: pointer;
`;
