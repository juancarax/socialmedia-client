import styled from "styled-components";

export const HomePageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BlueBackGround = styled.div`
  background-color: #79E5F1;
  width: 100%;
  height 30rem;
  display: flex; 
  align-items:center;
  justify-content: center;
  @media screen and (max-width: 600px) {
  height: 20vh;
  background-color: white;  

  }
`;
