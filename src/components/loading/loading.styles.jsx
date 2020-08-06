import styled, { css, keyframes } from "styled-components";

export const spinning = keyframes`
  to {
      transform: rotate(360deg)
  }
`;

export const SpinnerStyles = css`
  content: "";
  box-sizing: border-box;
  height: 60px;
  width: 60px;
  ${(props) => props.props.small && "width: 30px; height: 30px"};
  border-radius: 50%;
  border: 3px solid #eeeeee;
  border-top-color: #79e5f1;
  animation: ${spinning} 0.7s linear infinite;
`;

export const SpinnerComponent = styled.div`
  ${SpinnerStyles}
`;
