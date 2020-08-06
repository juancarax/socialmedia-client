import styled from "styled-components";

export const UserComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`;

export const UserDiv = styled.div`
  background-color: white;
  height: 30rem;
  width: 30rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const UserBox = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  margin-top: 5px;
`;

export const Username = styled.p`
  color: #212121;
  font-size: 14px;
  line-weight: 900;
  font-family: inherit;
  margin-top: 5px;
`;

export const PostDate = styled.p`
  color: #757575;
  font-size: 12px;
  font-family: inherit;
`;

export const ChangeImageButton = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const ChangeImageLabel = styled.label`
  font-size: 1em;
  font-weight: 700;
  color: white;
  background-color: #79e5f1;
  display: inline-block;
  cursor: pointer;
  font-weight: 700;
  color: white;
  background-color: black;
  display: inline-block;
  padding: 0.8rem 2rem;
  margin-right 0.5rem;
  text-transform: uppercase;
  margin-top: 10px;
`;

export const ImageConfirmationButton = styled.button`
 background-color: ${(props) => (props.cancel ? "#e53935" : " #fc6c54")} ;
 color: white;
 border: none;
 cursor: pointer;
 padding: 1rem 2rem;
 font-size: 1.1rem;
 font-weight: 600;
 text-transform: uppercase;
 margin-right: 10px;
 &:focus {
  outline: none;
}
  &:hover {
    box-shadow: 0 1rem 2rem rgba(black, .2);
  }
}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: space-between;
  margin-top: 1rem;
`;
